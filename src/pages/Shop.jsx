import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useReveal } from '../hooks/useReveal'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initial = CATEGORIES.includes(params.get('cat')) ? params.get('cat') : 'All'
  const [active, setActive] = useState(initial)
  const [sort, setSort] = useState('featured')

  const pick = (c) => {
    setActive(c)
    if (c === 'All') setParams({}, { replace: true })
    else setParams({ cat: c }, { replace: true })
  }

  let list = active === 'All' ? products : products.filter(p => p.cat === active)
  list = [...list]
  if (sort === 'low') list.sort((a, b) => a.price - b.price)
  if (sort === 'high') list.sort((a, b) => b.price - a.price)

  useReveal(`${active}-${sort}`)

  return (
    <section className="section shell">
      <div className="page-head" style={{ paddingTop: 0 }}>
        <span className="eyebrow">The collection</span>
        <h1>Shop <em>everything</em></h1>
        <p className="updated">{list.length} products · clean, vegan & cruelty-free</p>
      </div>

      <div className="filters" style={{ marginTop: '1.6rem' }}>
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={`pill ${active === c ? 'active' : ''}`}
            onClick={() => pick(c)}
          >
            {c}
          </button>
        ))}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="pill"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          aria-label="Sort"
        >
          <option value="featured">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid">
        {list.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>
    </section>
  )
}
