import { useState } from 'react';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <button
      aria-label="Menu"
      onClick={() => setOpen((o) => !o)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transform: open ? 'rotate(90deg)' : 'none',
        transition: 'transform 0.3s'
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <rect y="8" width="32" height="4" rx="2" fill="#333"/>
        <rect y="16" width="32" height="4" rx="2" fill="#333"/>
        <rect y="24" width="32" height="4" rx="2" fill="#333"/>
      </svg>
    </button>
  );
}