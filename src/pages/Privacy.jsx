import { SITE } from '../data/site'

export default function Privacy() {
  return (
    <section className="shell">
      <div className="page-head">
        <span className="eyebrow">Legal</span>
        <h1>Privacy <em>Policy</em></h1>
        <p className="updated">Last updated: June 4, 2026</p>
      </div>

      <div className="prose">
        <p>
          {SITE.llc} (“{SITE.name}”, “we”, “us”) respects your privacy. This policy explains
          what information we collect when you visit or shop with us, how we use it, and the
          choices you have.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li><strong>Information you provide:</strong> name, email, shipping and billing address, and order details when you create an account or place an order.</li>
          <li><strong>Payment information:</strong> processed securely by our payment providers. We do not store full card numbers on our servers.</li>
          <li><strong>Usage data:</strong> pages viewed, items added to cart, device and browser information, collected via cookies and similar technologies.</li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To process and ship orders and provide customer support.</li>
          <li>To send order updates and, with your consent, marketing emails (you can unsubscribe anytime).</li>
          <li>To improve our products, website, and overall shopping experience.</li>
          <li>To prevent fraud and comply with legal obligations.</li>
        </ul>

        <h2>Sharing your information</h2>
        <p>
          We share data only with service providers who help us operate (payment processors,
          shipping carriers, email tools) and only as needed to perform their service. We never
          sell your personal information.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to keep your cart, remember preferences, and understand site traffic.
          You can disable cookies in your browser settings, though some features may not work
          as intended.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, or delete your
          personal information, or opt out of marketing. To make a request, email us at{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <h2>Data retention & security</h2>
        <p>
          We keep your information only as long as needed to fulfil the purposes described here
          and to meet legal requirements. We use industry-standard safeguards to protect your data.
        </p>

        <h2>Children</h2>
        <p>Our site is not directed to children under 13, and we do not knowingly collect their data.</p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{' '}
          or call {SITE.phone}.<br />
          {SITE.llc}, {SITE.address}.
        </p>
      </div>
    </section>
  )
}
