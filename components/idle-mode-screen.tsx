'use client';

import StickyNotesData from '@/database/sticky-notes.json';
import { useIdle } from '@/hooks/use-idle';
import { shuffle } from '@/lib/utils';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useEffect, useEffectEvent, useMemo, useRef, useState } from 'react';

interface StickyNote {
  id: string;
  name: string;
  description: string;
}

const BG_COLORS = ['bg-amber-200', 'bg-pink-200', 'bg-sky-200', 'bg-lime-200', 'bg-violet-200', 'bg-orange-200'];

const SPAWN_INTERVAL_MS = 3000;
const MAX_VISIBLE = 25;
const NOTE_SIZE_PX = 256;
const EDGE_OVERFLOW_PX = 0; // how far a note may spill past the viewport edge — 0 keeps it fully on-screen
const EXIT_DELAY_OPTIONS_S = [0.05, 0.15, 0.25];

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

function randomExitDelay() {
  return EXIT_DELAY_OPTIONS_S[Math.floor(Math.random() * EXIT_DELAY_OPTIONS_S.length)];
}

function randomPosition() {
  if (typeof window === 'undefined') return { x: 0, y: 0 };

  const span = (size: number) => Math.max(size - NOTE_SIZE_PX + EDGE_OVERFLOW_PX * 2, 0);

  return {
    x: Math.random() * span(window.innerWidth) - EDGE_OVERFLOW_PX,
    y: Math.random() * span(window.innerHeight) - EDGE_OVERFLOW_PX,
  };
}

function createNote(key: number, note: StickyNote): VisibleNote {
  return {
    key,
    note,
    ...randomPosition(),
    tilt: randomTilt(),
    color: randomColor(),
    exitDelay: randomExitDelay(),
  };
}

const noteVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: ({ tilt }: { tilt: number }) => ({
    opacity: 1,
    scale: 1,
    rotate: tilt,
    transition: { duration: 0.25, ease: 'backOut' },
  }),
  exit: ({ exitDelay }: { exitDelay: number }) => ({
    opacity: 0,
    y: 40,
    transition: { delay: exitDelay, duration: 0.2, ease: 'easeIn' },
  }),
};

interface IdleNotesFieldProps {
  exiting: boolean;
  onAllExited: () => void;
}

// Mounted only while the overlay is shown (see IdleModeScreen), so the
// shuffled order, visible notes, and refs all reset for free on every
// fresh idle session — no manual reset needed.
function IdleNotesField({ exiting, onAllExited }: IdleNotesFieldProps) {
  const stickyNotes: StickyNote[] = useMemo(() => shuffle(StickyNotesData), []);
  const [visibleNotes, setVisibleNotes] = useState<VisibleNote[]>(() => [createNote(0, stickyNotes[0])]);
  const noteIndexRef = useRef(1);
  const keyRef = useRef(1);

  const spawnNote = useEffectEvent(() => {
    const note = stickyNotes[noteIndexRef.current % stickyNotes.length];
    const newNote = createNote(keyRef.current, note);

    keyRef.current += 1;
    noteIndexRef.current += 1;

    setVisibleNotes((prev) => {
      const next = [...prev, newNote];
      return next.length > MAX_VISIBLE ? next.slice(next.length - MAX_VISIBLE) : next;
    });
  });

  useEffect(() => {
    // Don't spawn while exiting. No setState here — when `exiting` flips
    // true, React runs the previous render's cleanup (clearInterval)
    // automatically before this body runs again, so the interval still
    // stops correctly without us calling anything directly.
    if (exiting) return;

    const interval = setInterval(spawnNote, SPAWN_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [exiting]);

  // Derived at render time instead of via setState — this is what
  // actually clears the list the instant `exiting` becomes true, letting
  // AnimatePresence pick up the removal and run each note's exit.
  const displayedNotes = exiting ? [] : visibleNotes;

  return (
    <AnimatePresence onExitComplete={exiting ? onAllExited : undefined}>
      {displayedNotes.map((vn) => (
        <motion.div
          key={vn.key}
          custom={{ tilt: vn.tilt, exitDelay: vn.exitDelay }}
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
          className={`rounded-sm p-4 shadow-sm pile ${vn.color}`}
        >
          <span className="text-base self-start justify-self-start leading-snug line-clamp-9 text-pretty">
            {vn.note.description}
          </span>
          <span className="text-xs font-mono opacity-50 self-end justify-self-start truncate max-w-[14ch]">
            {vn.note.name}
          </span>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default function IdleModeScreen() {
  const isIdle = useIdle();

  // "Showing" turns on the instant we go idle, but only turns off once
  // every note has finished exiting — an asymmetry that can't be a pure
  // function of `isIdle` alone. Adjusted during render when `isIdle`
  // changes (React's pattern for syncing state to a prop without an
  // Effect), rather than derived inside a useEffect.
  const [isShowing, setIsShowing] = useState(isIdle);
  const [prevIsIdle, setPrevIsIdle] = useState(isIdle);

  if (isIdle !== prevIsIdle) {
    setPrevIsIdle(isIdle);
    if (isIdle) setIsShowing(true);
  }

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <IdleNotesField exiting={!isIdle} onAllExited={() => setIsShowing(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
