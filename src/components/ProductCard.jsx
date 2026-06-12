import Media from './Media'
import { useStore } from '../store/StoreContext'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, setQuickView } = useStore()

  return (
    <article className="card reveal" style={{ transitionDelay: `${(index % 4) * 70}ms` }}>
      <div className="card-art" style={{ background: product.bg }} onClick={() => setQuickView(product)}>
        <span className="card-cat">{product.cat}</span>
        {product.compare && <span className="card-tag">Sale</span>}
        <Media product={product} />
        <span className="card-quick">Quick view</span>
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="card-note">{product.note}</p>
        <div className="card-foot">
          <span className="price">
            {product.compare && <s>${product.compare}</s>}
            ${product.price}
          </span>
          <button className="add-btn" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>+</button>
        </div>
      </div>
    </article>
  )
}
