import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Media from '../components/Media'
import { useStore } from '../store/StoreContext'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

export default function Checkout() {
  const { cart, subtotal, clearCart, flash } = useStore()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)

  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5
  const tax = Math.round(subtotal * 0.07 * 100) / 100
  const total = subtotal + shipping + tax

  const placeOrder = (e) => {
    e.preventDefault()
    const num = 'MM-' + Date.now().toString().slice(-6)
    setOrder({ num, total })
    clearCart()
    flash('Order placed ✦')
    window.scrollTo({ top: 0 })
  }

  // ---- confirmation ----
  if (order) {
    return (
      <section className="shell">
        <div className="checkout-done">
          <div className="done-mark">✦</div>
          <span className="eyebrow">Order received</span>
          <h1>Thank <em>you</em></h1>
          <p>Your order <strong>{order.num}</strong> has been received. We'll email you shortly to confirm the details and arrange payment &amp; delivery.</p>
          <div className="done-total">Order total · <b>${order.total.toFixed(2)}</b></div>
          <Link to="/shop" className="btn btn-primary">Continue shopping <span className="arr">→</span></Link>
        </div>
      </section>
    )
  }

  // ---- empty cart ----
  if (cart.length === 0) {
    return (
      <section className="shell">
        <div className="checkout-done">
          <div style={{ fontSize: '2.6rem' }}>🪷</div>
          <h1 style={{ marginTop: '1rem' }}>Your bag is <em>empty</em></h1>
          <p>Add a little ritual before you check out.</p>
          <Link to="/shop" className="btn btn-primary">Shop the collection <span className="arr">→</span></Link>
        </div>
      </section>
    )
  }

  return (
    <section className="shell">
      <div className="page-head">
        <span className="eyebrow">Secure checkout</span>
        <h1>Check<em>out</em></h1>
      </div>

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={placeOrder}>
          <div className="checkout-section">
            <h3>Contact</h3>
            <div className="field"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
            <div className="field"><label>Phone</label><input type="tel" required placeholder="(555) 000-0000" /></div>
          </div>

          <div className="checkout-section">
            <h3>Shipping address</h3>
            <div className="field-row">
              <div className="field"><label>First name</label><input required placeholder="Ava" /></div>
              <div className="field"><label>Last name</label><input required placeholder="Rosewood" /></div>
            </div>
            <div className="field"><label>Address</label><input required placeholder="123 Main St" /></div>
            <div className="field"><label>Apartment, suite (optional)</label><input placeholder="Apt 4B" /></div>
            <div className="field-row three">
              <div className="field"><label>City</label><input required placeholder="Miami" /></div>
              <div className="field"><label>State</label>
                <select required defaultValue=""><option value="" disabled>State</option>{US_STATES.map(s => <option key={s}>{s}</option>)}</select>
              </div>
              <div className="field"><label>ZIP</label><input required placeholder="33130" inputMode="numeric" /></div>
            </div>
          </div>

          <div className="checkout-section">
            <h3>Notes (optional)</h3>
            <div className="field"><label>Anything we should know?</label><textarea rows="3" placeholder="Delivery notes, gift message, etc." /></div>
          </div>

          <p className="pay-note">✦ No payment is taken online. We'll email you to confirm your order and arrange payment &amp; delivery.</p>
          <button className="btn btn-primary" type="submit">Place order <span className="arr">→</span></button>
          <button type="button" className="checkout-back" onClick={() => navigate('/shop')}>← Continue shopping</button>
        </form>

        <aside className="summary">
          <h3>Order summary</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div className="summary-item" key={item.id}>
                <div className="summary-thumb" style={{ background: item.bg }}>
                  <Media product={item} />
                  <span className="summary-qty">{item.qty}</span>
                </div>
                <div className="summary-info">
                  <h4>{item.name}</h4>
                  <span>{item.cat}</span>
                </div>
                <div className="summary-price">${item.price * item.qty}</div>
              </div>
            ))}
          </div>
          <div className="summary-rows">
            <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{shipping ? `$${shipping.toFixed(2)}` : 'Free'}</span></div>
            <div className="summary-row"><span>Tax (est.)</span><span>${tax.toFixed(2)}</span></div>
          </div>
          <div className="summary-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
        </aside>
      </div>
    </section>
  )
}
