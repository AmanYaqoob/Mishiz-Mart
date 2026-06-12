import Vessel from './Vessel'

// Renders a product's real photo if `image` is set, otherwise the branded vessel.
// Drop photos in /public (e.g. /public/products/serum.jpg) and set
// image: '/products/serum.jpg' on the product — that's all.
export default function Media({ product }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} loading="lazy" className="media-img" />
  }
  return <Vessel type={product.vessel} tint={product.tint} />
}
