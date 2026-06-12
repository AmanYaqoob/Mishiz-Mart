import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { StoreProvider } from './store/StoreContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import AuthModal from './components/AuthModal'
import QuickView from './components/QuickView'
import Toast from './components/Toast'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  return null
}

export default function App() {
  return (
    <StoreProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <AuthModal />
      <QuickView />
      <Toast />
    </StoreProvider>
  )
}
