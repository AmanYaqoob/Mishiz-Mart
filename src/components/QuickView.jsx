import Media from './Media'
import { useStore } from '../store/StoreContext'

export default function QuickView() {
  const { quickView, setQuickView, addToCart } = useStore()
  const p = quickView

  return (
    <div className={`modal ${p ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && setQuickView(null)}>
      <div className="modal-card qv-card">
        {p && (
          <>
            <button className="close-x" onClick={() => setQuickView(null)} aria-label="Close" style={{ zIndex: 2 }}>✕</button>
            <div className="qv-art" style={{ background: p.bg }}>
              <Media product={p} />
            </div>
            <div className="qv-info">
              <span className="card-cat">{p.cat}</span>
              <h3>{p.name}</h3>
              <p className="desc">{p.note} A clean, vegan formula made to feel like a small daily ritual — gentle enough for everyday use and never tested on animals.</p>
              <div className="price">
                {p.compare && <s>${p.compare}</s>}${p.price}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => { addToCart(p); setQuickView(null) }}
              >
                Add to bag <span className="arr">→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
