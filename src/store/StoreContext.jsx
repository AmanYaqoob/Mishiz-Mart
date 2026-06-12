import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const StoreContext = createContext(null)
export const useStore = () => useContext(StoreContext)

const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read('mm_cart', []))
  const [user, setUser] = useState(() => read('mm_user', null))
  const [cartOpen, setCartOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [quickView, setQuickView] = useState(null)
  const [toast, setToast] = useState('')

  useEffect(() => { localStorage.setItem('mm_cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { localStorage.setItem('mm_user', JSON.stringify(user)) }, [user])

  const flash = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2400)
  }, [])

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id)
      if (found) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    flash(`${product.name} added to your bag`)
  }, [flash])

  const setQty = useCallback((id, delta) => {
    setCart(prev => prev
      .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter(i => i.qty > 0))
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  // Frontend-only auth: persists an account list in localStorage. No real backend yet.
  const signup = useCallback((name, email, password) => {
    const accounts = read('mm_accounts', {})
    if (accounts[email]) return { ok: false, error: 'An account with this email already exists.' }
    accounts[email] = { name, email, password }
    localStorage.setItem('mm_accounts', JSON.stringify(accounts))
    setUser({ name, email })
    flash(`Welcome, ${name.split(' ')[0]} ✦`)
    return { ok: true }
  }, [flash])

  const login = useCallback((email, password) => {
    const accounts = read('mm_accounts', {})
    const acc = accounts[email]
    if (!acc || acc.password !== password) return { ok: false, error: 'Email or password is incorrect.' }
    setUser({ name: acc.name, email })
    flash(`Welcome back, ${acc.name.split(' ')[0]} ✦`)
    return { ok: true }
  }, [flash])

  const logout = useCallback(() => { setUser(null); flash('Signed out') }, [flash])

  const count = cart.reduce((n, i) => n + i.qty, 0)
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  const value = {
    cart, count, subtotal, addToCart, setQty, removeFromCart, clearCart,
    user, signup, login, logout,
    cartOpen, setCartOpen, authOpen, setAuthOpen,
    quickView, setQuickView,
    toast, flash,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
