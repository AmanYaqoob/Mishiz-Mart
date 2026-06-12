import { useNavigate } from 'react-router-dom'
import Media from './Media'
import { useStore } from '../store/StoreContext'

export default function CartDrawer() {
  const { cart, subtotal, count, cartOpen, setCartOpen, setQty, removeFromCart } = useStore()
  const navigate = useNavigate()
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5
  const toFree = Math.max(0, 50 - subtotal)

  return (
    <>
      <div className={`overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />
      <aside className={`drawer ${cartOpen ? 'open' : ''}`} aria-hidden={!cartOpen}>
        <div className="drawer-head">
          <h3>Your Bag {count > 0 && `· ${count}`}</h3>
          <button className="drawer-close" onClick={() => setCartOpen(false)} aria-label="Close">✕</button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontSize: '2.4rem' }}>🪷</div>
              <div className="big">Your bag is empty</div>
              <p>Add a little ritual to get started.</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-row" key={item.id}>
                <div className="cart-thumb" style={{ background: item.bg }}>
                  <Media product={item} />
                </div>
                <div className="cart-info">
                  <span className="c">{item.cat}</span>
                  <h4>{item.name}</h4>
                  <div className="qty">
                    <button onClick={() => setQty(item.id, -1)} aria-label="Decrease">−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => setQty(item.id, 1)} aria-label="Increase">+</button>
                  </div>
                  <div><button className="cart-remove" onClick={() => removeFromCart(item.id)}>Remove</button></div>
                </div>
                <div className="cart-line-price">${item.price * item.qty}</div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-foot">
            <div className="ship-bar"><i style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }} /></div>
            <p className="ship-note">
              {toFree > 0 ? `You're $${toFree} away from free shipping ✦` : 'You\'ve unlocked free shipping ✦'}
            </p>
            <div className="cart-total">
              <span className="lbl">Subtotal {shipping ? `· +$${shipping} shipping` : '· free shipping'}</span>
              <span className="amt">${subtotal + shipping}</span>
            </div>
            <button className="btn btn-primary" onClick={() => { setCartOpen(false); navigate('/checkout') }}>
              Checkout <span className="arr">→</span>
            </button>
            <p className="ship-note">Taxes calculated at checkout.</p>
          </div>
        )}
      </aside>
    </>
  )
}
