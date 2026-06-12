import { Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Media from '../components/Media'
import { useStore } from '../store/StoreContext'
import { useReveal } from '../hooks/useReveal'

// Flat line icons (match the navbar set) — no emoji.
const I = {
  bottle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="9" width="10" height="12" rx="2.5" /><path d="M10 9V6h4v3" /><rect x="10.5" y="2.5" width="3" height="3" rx="1" /><path d="M9.5 14h5" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4S8 4 6 12c-1.2 4 1 7 1 7s4.8-.8 8-5c2.6-3.4 5-10 5-10Z" /><path d="M7 19c2-5 6-9 11-12" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v9H3z" /><path d="M14 9h3.5L21 12.5V15h-7z" /><circle cx="7" cy="18" r="1.7" /><circle cx="17" cy="18" r="1.7" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.2-3 7.3-7 9-4-1.7-7-4.8-7-9V6z" /><path d="M9 12l2 2 4-4" />
    </svg>
  ),
}

// img falls back to an existing product photo; drop a dedicated shot at
// /cats/<cat>.jpg to override (the gradient shows if no image loads).
const RAIL = [
  { cat: 'Skin', label: '5 formulas', img: '/cats/skin.jpg', fallback: '/products/sk1.png', grad: 'linear-gradient(160deg,#F6ECD3,#E7C98F)' },
  { cat: 'Body', label: '5 essentials', img: '/cats/body.jpg', fallback: '/products/bd1.png', grad: 'linear-gradient(160deg,#F4E2D8,#DDB39D)' },
  { cat: 'Hair', label: '5 rituals', img: '/cats/hair.jpg', fallback: '/products/ha3.png', grad: 'linear-gradient(160deg,#E9EBDD,#B9BE9D)' },
  { cat: 'Scent', label: '5 perfumes', img: '/cats/scent.jpg', fallback: '/products/sc2.png', grad: 'linear-gradient(160deg,#EADAE0,#C79AAA)' },
]

export default function Home() {
  const featured = products.filter(p => p.compare).slice(0, 4)
  const bestsellers = products.slice(0, 8)
  const hero = products.find(p => p.id === 'sk4') // Midnight Repair Oil — the spotlight
  const roseNoir = products.find(p => p.id === 'sc2') // Rose Noir — hero banner feature
  const { addToCart, flash, setQuickView } = useStore()
  const navigate = useNavigate()
  useReveal('home')

  return (
    <>
      {/* ── HERO (dark image banner) ── */}
      <section className="hero-banner">
        <div className="hero-banner-media"><span className="hero-tag">Eau de Parfum · N°1</span></div>
        <div className="hero-banner-veil" />
        <div className="shell hero-banner-inner">
          <div className="hero-banner-copy">
            <span className="eyebrow">The signature scent · Eau de Parfum</span>
            <h1>Rose <em>Noir</em></h1>
            <p>Dark rose laced with oud and saffron — clean, vegan, and made to linger long after you leave the room.</p>
            <div className="hero-cta">
              <button className="btn btn-light" onClick={() => setQuickView(roseNoir)}>Shop Rose Noir <span className="arr">→</span></button>
              <Link to="/shop" className="btn btn-ghost-light">Explore the collection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="shell">
        <div className="trust reveal">
          <div><div className="ic">{I.bottle}</div><h4>Eau de Parfum</h4><p>High-concentration scent that lingers all day.</p></div>
          <div><div className="ic">{I.leaf}</div><h4>Clean &amp; vegan</h4><p>No parabens, phthalates or cruelty — ever.</p></div>
          <div><div className="ic">{I.truck}</div><h4>Free US shipping</h4><p>On every order over $50.</p></div>
          <div><div className="ic">{I.shield}</div><h4>30-day guarantee</h4><p>Love it or send it back, simple.</p></div>
        </div>
      </section>

      {/* ── CATEGORY RAIL ── */}
      <section className="section shell">
        <div className="sec-head reveal">
          <div>
            <span className="sec-num">( 01 ) — The edits</span>
            <h2>Shop by <em>ritual</em></h2>
          </div>
          <p className="lead">Four curated edits to build a routine that feels entirely your own.</p>
        </div>
        <div className="cats">
          {RAIL.map((r, i) => (
            <button
              key={r.cat}
              className="cat reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => navigate(`/shop?cat=${r.cat}`)}
            >
              <span
                className="cat-circle"
                style={{ backgroundImage: `url(${r.img}), url(${r.fallback}), ${r.grad}` }}
              />
              <h3>{r.cat}</h3>
              <span className="cat-count">{r.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="section tight shell" id="featured">
        <div className="sec-head reveal">
          <div>
            <span className="sec-num">( 02 ) — On offer</span>
            <h2>This season's <em>obsessions</em></h2>
          </div>
          <p className="lead">Limited-run favourites, currently a little kinder on the price.</p>
        </div>
        <div className="grid">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* ── NOIR RITUAL ── */}
      <section className="noir">
        <div className="section shell ritual">
          <div className="ritual-head reveal">
            <span className="eyebrow">( 03 ) — The ritual</span>
            <h2>Three steps to a<br /><em>quiet</em> glow</h2>
            <p>Skincare shouldn't be a chore. Ours is built around three slow, intentional moments.</p>
            <Link to="/shop" className="btn btn-light">Build your routine <span className="arr">→</span></Link>
          </div>
          <div className="ritual-steps">
            {[
              ['01', 'Begin clean', 'Melt away the day with gentle, pH-balanced formulas that never strip.'],
              ['02', 'Feed the skin', 'Targeted serums and oils with actives that actually earn their place.'],
              ['03', 'Seal it in', 'Lightweight color and moisture to finish — luminous, never heavy.'],
            ].map(([n, t, d]) => (
              <div className="ritual-step reveal" key={n}>
                <span className="n">{n}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT ── */}
      <section className="section shell">
        <div className="spot reveal">
          <div className="spot-art" style={{ background: hero.bg }}>
            <Media product={hero} />
          </div>
          <div>
            <span className="eyebrow">Hero product</span>
            <h2>{hero.name.split(' ').slice(0, 1)} <em>{hero.name.split(' ').slice(1).join(' ')}</em></h2>
            <p className="desc">{hero.note} A nightly elixir of cold-pressed botanicals that drinks into the skin while you sleep — you'll wake to a softer, more rested complexion.</p>
            <div className="spot-feat">
              <div><span className="k">12</span><span className="v">active botanicals</span></div>
              <div><span className="k">8wk</span><span className="v">visible results</span></div>
              <div><span className="k">100%</span><span className="v">vegan formula</span></div>
            </div>
            <div className="spot-buy">
              <span className="price">{hero.compare && <s>${hero.compare}</s>}${hero.price}</span>
              <button className="btn btn-primary" onClick={() => addToCart(hero)}>Add to bag <span className="arr">→</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BESTSELLERS ── */}
      <section className="section tight shell" id="bestsellers">
        <div className="sec-head reveal">
          <div>
            <span className="sec-num">( 04 ) — Loved by you</span>
            <h2>Bestsellers</h2>
          </div>
          <Link to="/shop" className="btn btn-ghost">View all 20 <span className="arr">→</span></Link>
        </div>
        <div className="grid">
          {bestsellers.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="section shell">
        <div className="news reveal">
          <span className="eyebrow">The list</span>
          <h2>Join for early <em>drops</em> & rituals</h2>
          <form className="news-form" onSubmit={(e) => { e.preventDefault(); e.target.reset(); flash("You're on the list ✦") }}>
            <input type="email" placeholder="your@email.com" required aria-label="Email" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
          <small>No spam — just new launches, edits and the occasional ritual. Unsubscribe anytime.</small>
        </div>
      </section>
    </>
  )
}
