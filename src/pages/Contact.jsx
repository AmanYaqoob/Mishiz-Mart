import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { useStore } from '../store/StoreContext'

export default function Contact() {
  const { flash } = useStore()
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    e.target.reset()
    setSent(true)
    flash("Message sent — we'll be in touch ✦")
  }

  const tel = `tel:${SITE.phone.replace(/[^\d+]/g, '')}`

  return (
    <section className="shell">
      <div className="page-head">
        <span className="eyebrow">We're here to help</span>
        <h1>Get in <em>touch</em></h1>
        <p className="updated">Questions about an order, a product, or a partnership? Send a note — we read every one.</p>
      </div>

      <div className="contact-grid">
        <aside className="contact-info">
          <div className="contact-card">
            <h4>Email</h4>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="contact-card">
            <h4>Phone</h4>
            <a href={tel}>{SITE.phone}</a>
          </div>
          <div className="contact-card">
            <h4>Studio</h4>
            <p>{SITE.address}</p>
          </div>
          <div className="contact-card">
            <h4>Hours</h4>
            <p>{SITE.hours}</p>
          </div>
          <div className="contact-card">
            <h4>Quick help</h4>
            <p><Link to="/faq">Read the FAQ</Link> · <Link to="/refund-policy">Returns & refunds</Link></p>
          </div>
        </aside>

        <form className="contact-form" onSubmit={submit}>
          {sent && <div className="contact-ok">Thanks — your message is on its way. We typically reply within 1–2 business days. ✦</div>}
          <div className="field">
            <label>Name</label>
            <input required placeholder="Your name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" required placeholder="you@email.com" />
          </div>
          <div className="field">
            <label>Subject</label>
            <input placeholder="Order #, product question, etc." />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea rows="6" required placeholder="How can we help?" />
          </div>
          <button className="btn btn-primary" type="submit">Send message <span className="arr">→</span></button>
        </form>
      </div>
    </section>
  )
}
