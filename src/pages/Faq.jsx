import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

const FAQS = [
  { q: 'Are your products cruelty-free and vegan?', a: 'Yes — every formula is 100% cruelty-free and vegan. We never test on animals and never use animal-derived ingredients.' },
  { q: 'Where do you ship and how much does it cost?', a: 'We ship across the USA. Standard shipping is a flat $5, and it\'s free on all orders over $50. Most orders arrive within 3–6 business days.' },
  { q: 'How long does delivery take?', a: 'Orders are processed within 1–2 business days. Standard US delivery then takes about 3–6 business days depending on your location.' },
  { q: 'What is your return policy?', a: 'We offer a 30-day happiness guarantee. If something isn\'t right, you can request a return within 30 days of delivery. See our Refund Policy for full details.' },
  { q: 'Are your formulas suitable for sensitive skin?', a: 'Our products are dermatologist tested and formulated to be gentle. We always recommend reviewing the ingredient list and patch-testing if you have known sensitivities.' },
  { q: 'Do I need an account to order?', a: 'You can browse and build a bag without one, but creating a free account lets you check out faster, track orders, and get early access to new drops.' },
  { q: 'How can I contact customer care?', a: `Email us anytime at ${SITE.email} or call ${SITE.phone} during ${SITE.hours}. We typically reply within 1–2 business days.` },
  { q: 'Are your products and packaging sustainable?', a: 'We use recyclable packaging wherever possible and formulate with clean, conscious ingredients. We\'re always working to reduce our footprint.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="shell">
      <div className="page-head">
        <span className="eyebrow">Help</span>
        <h1>Frequently <em>asked</em></h1>
        <p className="updated">Everything you need before you check out.</p>
      </div>

      <div className="accordion">
        {FAQS.map((item, i) => (
          <div className="acc-item" key={i}>
            <button
              className="acc-q"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {item.q}
              <span className="sign">+</span>
            </button>
            <div className={`acc-a ${open === i ? 'open' : ''}`}>
              <p style={{ margin: 0 }}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="prose" style={{ paddingBottom: '4rem' }}>
        Still have a question? <Link to="/refund-policy">See our returns</Link> or email{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </section>
  )
}
