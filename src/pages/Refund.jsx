import { SITE } from '../data/site'

export default function Refund() {
  return (
    <section className="shell">
      <div className="page-head">
        <span className="eyebrow">Legal</span>
        <h1>Refund <em>Policy</em></h1>
        <p className="updated">Last updated: June 4, 2026</p>
      </div>

      <div className="prose">
        <p>
          We want you to love your ritual. If something isn't right, we're here to help with a
          simple, fair returns process.
        </p>

        <h2>30-day happiness guarantee</h2>
        <p>
          You may request a return within <strong>30 days</strong> of delivery. For hygiene and
          safety, items must be unused, in their original packaging, and (where applicable) with
          seals intact. Lightly swatched color products may be eligible — just reach out.
        </p>

        <h2>How to start a return</h2>
        <ul>
          <li>Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with your order number and the items you'd like to return.</li>
          <li>We'll reply within 1–2 business days with a prepaid return label and instructions.</li>
          <li>Pack the items securely and drop them off using the provided label.</li>
        </ul>

        <h2>Refunds</h2>
        <p>
          Once we receive and inspect your return, we'll email you a confirmation. Approved refunds
          are issued to your original payment method within <strong>5–10 business days</strong>.
          Original shipping charges are non-refundable unless the return is due to our error.
        </p>

        <h2>Exchanges</h2>
        <p>
          Want a different shade or product? Start a return and place a new order — this is the
          fastest way to get what you want. We'll happily help you choose.
        </p>

        <h2>Damaged or wrong items</h2>
        <p>
          If your order arrives damaged or incorrect, contact us within <strong>7 days</strong> of
          delivery with a photo and we'll make it right at no cost to you.
        </p>

        <h2>Non-returnable items</h2>
        <ul>
          <li>Gift cards and final-sale items.</li>
          <li>Used products beyond what's needed to assess suitability (for hygiene reasons).</li>
        </ul>

        <h2>Questions</h2>
        <p>
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phone} ({SITE.hours}).<br />
          {SITE.llc}, {SITE.address}.
        </p>
      </div>
    </section>
  )
}
