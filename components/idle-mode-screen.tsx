'use client';

import { useIdle } from '@/hooks/use-idle';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface StickyNote {
  id: string;
  name: string;
  description: string;
}

const STICKY_NOTES: StickyNote[] = [
  { id: '1', name: 'Sarah Chen', description: 'Working on the new dashboard redesign' },
  { id: '2', name: 'Marcus Lee', description: 'Fixed the payment gateway bug' },
  { id: '3', name: 'Priya Patel', description: 'Drafting Q3 roadmap proposal' },
  { id: '4', name: 'Tom Becker', description: 'Reviewing pull requests' },
  { id: '5', name: 'Aisha Khan', description: 'User research interviews this week' },
  { id: '6', name: 'Diego Ramirez', description: 'Onboarding new hires' },
  { id: '7', name: 'Emma Wilson', description: 'Updating API documentation' },
  { id: '8', name: 'Noah Kim', description: 'Performance optimization sprint' },
];

const BG_COLORS = ['bg-amber-200', 'bg-pink-200', 'bg-sky-200', 'bg-lime-200', 'bg-violet-200', 'bg-orange-200'];

const SPAWN_INTERVAL_MS = 3000;
const MAX_VISIBLE = 20;
const NOTE_SIZE_PX = 230;
const RANDOM_DELY = [0.05, 0.15, 0.25];

interface VisibleNote {
  key: number;
  note: StickyNote;
  x: number;
  y: number;
  tilt: number;
  color: string;
  exitDelay: number;
}

function randomTilt() {
  return Math.random() * 20 - 10;
}

function randomColor() {
  return BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
}

function randomPosition() {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 };
  }

  return {
    x: Math.random() * (window.innerWidth - NOTE_SIZE_PX) - NOTE_SIZE_PX * 0.2,
    y: Math.random() * (window.innerHeight - NOTE_SIZE_PX) - NOTE_SIZE_PX * 0.2,
  };
}

function createNote(key: number, noteIndex: number): VisibleNote {
  return {
    key,
    note: STICKY_NOTES[noteIndex % STICKY_NOTES.length],
    ...randomPosition(),
    tilt: randomTilt(),
    color: randomColor(),
    exitDelay: RANDOM_DELY[Math.floor(Math.random() * 3)],
  };
}

const noteVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: ({ tilt }: { tilt: number }) => ({
    opacity: 1,
    scale: 1,
    rotate: tilt,
    transition: {
      duration: 0.25,
      ease: 'backOut',
    },
  }),
  exit: ({ exitDelay }: { exitDelay: number }) => ({
    opacity: 0,
    scale: 1,
    y: 20,
    transition: {
      delay: exitDelay,
      duration: 0.2,
      ease: 'easeIn',
    },
  }),
};

function IdleNotesField({ exiting, onAllExited }: { exiting: boolean; onAllExited: () => void }) {
  const [visibleNotes, setVisibleNotes] = useState<VisibleNote[]>(() => [createNote(0, 0)]);
  const noteIndexRef = useRef(1);
  const keyRef = useRef(1);

  useEffect(() => {
    if (exiting) {
      (async () => {
        setVisibleNotes([]);
      })();
      return;
    }

    const interval = setInterval(() => {
      const newNote = createNote(keyRef.current, noteIndexRef.current);

      keyRef.current += 1;
      noteIndexRef.current += 1;

      setVisibleNotes((prev) => {
        const next = [...prev, newNote];

        return next.length > MAX_VISIBLE ? next.slice(next.length - MAX_VISIBLE) : next;
      });
    }, SPAWN_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [exiting]);

  return (
    <AnimatePresence onExitComplete={onAllExited}>
      {visibleNotes.map((vn) => (
        <motion.div
          key={vn.key}
          custom={{
            tilt: vn.tilt,
            exitDelay: vn.exitDelay,
          }}
          variants={noteVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'absolute',
            left: vn.x,
            top: vn.y,
            zIndex: vn.key,
            width: NOTE_SIZE_PX,
            height: NOTE_SIZE_PX,
          }}
          className={`rounded-sm p-4 shadow-sm flex flex-col gap-1 ${vn.color}`}
        >
          <span className="text-xs font-mono opacity-60">#{vn.note.id}</span>

          <span className="text-sm font-semibold">{vn.note.name}</span>

          <span className="text-xs leading-snug">{vn.note.description}</span>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default function IdleModeScreen() {
  const isIdle = useIdle();

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [childrenExited, setChildrenExited] = useState(false);

  useEffect(() => {
    if (isIdle) {
      (async () => {
        setOverlayVisible(true);
        setChildrenExited(false);
      })();
    }
  }, [isIdle]);

  useEffect(() => {
    if (!isIdle && childrenExited) {
      (async () => {
        setOverlayVisible(false);
      })();
    }
  }, [isIdle, childrenExited]);

  if (!overlayVisible) {
    return null;
  }

  const shouldExitChildren = !isIdle;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="idle-overlay"
        className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        {childrenExited && shouldExitChildren ? (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => {
              setOverlayVisible(false);
            }}
          />
        ) : (
          <IdleNotesField
            exiting={shouldExitChildren}
            onAllExited={() => {
              if (shouldExitChildren) {
                setChildrenExited(true);
              }
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
