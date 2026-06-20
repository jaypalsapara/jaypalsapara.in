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

const SPAWN_INTERVAL_MS = 3000; // time between each new note appearing
const MAX_VISIBLE = 5; // sliding window size
const NOTE_SIZE_PX = 160; // must match the `size-40` (10rem) note
const EDGE_PADDING_PX = 16; // small gap so notes don't touch the very edge

interface VisibleNote {
  key: number;
  note: StickyNote;
  x: number; // px from left
  y: number; // px from top
  tilt: number;
  color: string;
}

function randomTilt() {
  return Math.random() * 20 - 10; // -10deg to 10deg
}

function randomColor() {
  return BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
}

function randomPosition() {
  if (typeof window === 'undefined') return { x: 0, y: 0 };

  const maxX = Math.max(window.innerWidth - NOTE_SIZE_PX - EDGE_PADDING_PX * 2, 0);
  const maxY = Math.max(window.innerHeight - NOTE_SIZE_PX - EDGE_PADDING_PX * 2, 0);

  return {
    x: EDGE_PADDING_PX + Math.random() * maxX,
    y: EDGE_PADDING_PX + Math.random() * maxY,
  };
}

function createNote(key: number, noteIndex: number): VisibleNote {
  return {
    key,
    note: STICKY_NOTES[noteIndex % STICKY_NOTES.length],
    ...randomPosition(),
    tilt: randomTilt(),
    color: randomColor(),
  };
}

const noteVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 0 },
  visible: ({ tilt }: { tilt: number }) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: tilt,
    transition: { duration: 0.2, ease: 'easeOut' },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

// Only ever mounted while idle, so its state resets for free on unmount.
function IdleNotesField() {
  // Lazy initializer — safe even under Strict Mode's double-invoke,
  // since React only keeps one of the two results.
  const [visibleNotes, setVisibleNotes] = useState<VisibleNote[]>(() => [createNote(0, 0)]);
  const noteIndexRef = useRef(1);
  const keyRef = useRef(1);

  useEffect(() => {
    // Pure subscription: sets up a timer, no immediate setState call in
    // the body. If Strict Mode mounts this twice, the first interval is
    // cleared before it ever ticks, so only the surviving one fires.
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
  }, []);

  return (
    <AnimatePresence>
      {visibleNotes.map((vn) => (
        <motion.div
          key={vn.key}
          custom={{ tilt: vn.tilt }}
          variants={noteVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'absolute',
            left: `${vn.x}px`,
            top: `${vn.y}px`,
            zIndex: vn.key,
          }}
          className={`size-40 p-4 rounded-sm shadow-lg flex flex-col gap-1 ${vn.color}`}
        >
          <span className="text-xs font-mono opacity-60">#{vn.note.id}</span>
          <span className="font-semibold text-sm">{vn.note.name}</span>
          <span className="text-xs leading-snug">{vn.note.description}</span>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default function IdleModeScreen() {
  const isIdle = useIdle();

  return (
    <AnimatePresence>
      {isIdle && (
        <motion.div
          className="fixed z-50 inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IdleNotesField />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
