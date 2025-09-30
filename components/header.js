import ThemeSwitcher from './themeToggle';
import HamburgerMenu from './hamburgerMenu';
import Link from 'next/link';

export default function Header({ studentNumber, activeTab, setActiveTab }) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '2px solid #333',
      padding: '10px 20px',
      background: 'var(--header-bg)',
      color: 'var(--header-text)'
    }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>{studentNumber}</span>
      </div>
      <nav aria-label="Main navigation" style={{ flex: 1, textAlign: 'center' }}>
        <Link href="/"><button aria-current={activeTab === 0} onClick={() => setActiveTab(0)}>Tabs</button></Link>
        <Link href="/escape-room"><button aria-current={activeTab === 1} onClick={() => setActiveTab(1)}>Escape Room</button></Link>
        <Link href="/coding-races"><button aria-current={activeTab === 2} onClick={() => setActiveTab(2)}>Coding Races</button></Link>
        <Link href="/court-room"><button aria-current={activeTab === 3} onClick={() => setActiveTab(3)}>Court Room</button></Link>
        <Link href="/about"><button aria-current={activeTab === 4} onClick={() => setActiveTab(4)}>About</button></Link>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <ThemeSwitcher />
        <HamburgerMenu />
      </div>
    </header>
  );
}