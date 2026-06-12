import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <span className="brand-mark">Mishiz <b>Mart</b></span>
            <p className="footer-about">
              Clean, conscious beauty for an everyday ritual — skin, color, hair and scent,
              thoughtfully made and never tested on animals.
            </p>
            <div className="footer-contact">
              <div className="ph">{SITE.phone}</div>
              <div>{SITE.email}</div>
              <div style={{ marginTop: '.6rem', opacity: .8 }}>{SITE.address}</div>
              <div style={{ marginTop: '.4rem', opacity: .7 }}>{SITE.hours}</div>
            </div>
          </div>

          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop">All products</Link></li>
              <li><Link to="/shop">Skin</Link></li>
              <li><Link to="/shop">Color</Link></li>
              <li><Link to="/shop">Scent</Link></li>
            </ul>
          </div>

          <div>
            <h4>Help</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/refund-policy">Returns & refunds</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><Link to="/refund-policy">Refund policy</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.llc}. All rights reserved.</span>
          <span>Made with care in the USA ✦</span>
        </div>
      </div>
    </footer>
  )
}
