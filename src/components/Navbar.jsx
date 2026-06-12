import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useStore } from '../store/StoreContext'

const BagIcon = () => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8h12l-1 12H7L6 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
)
const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
)

export default function Navbar() {
  const { count, setCartOpen, setAuthOpen, user } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the mobile menu on navigation
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Transparent + light only at the top of the homepage (and not while the menu is open).
  const overHero = pathname === '/' && !scrolled && !menuOpen

  return (
    <>
    <header className={`nav ${overHero ? 'over-hero' : 'scrolled'}`}>
      <nav className="nav-inner shell">
        <NavLink to="/" className="brand">
          <span className="brand-mark">Mishiz<i>Mart</i></span>
          <span className="brand-tag">Beauty</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/refund-policy">Returns</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-actions">
          <button className="nav-ic" onClick={() => setAuthOpen(true)} aria-label="Account">
            <UserIcon />
            <span className="nav-ic-label">{user ? user.name.split(' ')[0] : 'Account'}</span>
          </button>
          <button className="nav-ic cart" onClick={() => setCartOpen(true)} aria-label={`Cart, ${count} items`}>
            <BagIcon />
            <span className="nav-ic-label">Cart</span>
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <button
            className={`nav-burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span />
          </button>
        </div>
      </nav>
    </header>

      {/* mobile menu — side drawer, kept OUTSIDE <header> so the nav's
          backdrop-filter doesn't become its containing block */}
      <div className={`m-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <aside className={`m-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="m-head">
          <span className="brand-mark">Mishiz<i>Mart</i></span>
          <button className="m-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <nav className="m-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/refund-policy">Returns</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="m-actions">
          <button className="btn btn-ghost" onClick={() => { setMenuOpen(false); setAuthOpen(true) }}>
            {user ? `Hi, ${user.name.split(' ')[0]}` : 'Log in'}
          </button>
          <button className="btn btn-primary" onClick={() => { setMenuOpen(false); setCartOpen(true) }}>
            View bag{count > 0 ? ` · ${count}` : ''}
          </button>
        </div>
      </aside>
    </>
  )
}
