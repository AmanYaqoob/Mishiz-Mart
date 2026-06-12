// Self-contained, premium SVG cosmetic vessels — your store's OWN house label.
// Every vessel wears a monogram (`brand`) so the whole catalog reads as one
// cohesive private-label line. No third-party branding anywhere.
// type: dropper | jar | tube | pump | lipstick | flask | compact | mist

export default function Vessel({ type = 'dropper', tint = '#C16B4F', cap = '#251C17', brand = 'M' }) {
  const liquid = tint
  const glass = withAlpha(tint, 0.3)
  const label = withAlpha('#FDFAF4', 0.92)

  const Shine = ({ x, y, w, h }) => (
    <rect x={x} y={y} width={w} height={h} rx={w / 2} fill="#fff" opacity=".4" />
  )
  // Debossed paper label carrying the store monogram + ruled lines.
  const Label = ({ x, y, w, h }) => {
    const cx = x + w / 2
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} rx="3" fill={label} />
        <text x={cx} y={y + h * 0.44} fontFamily="Fraunces, Georgia, serif" fontSize={w * 0.36}
          fontWeight="600" fill={cap} textAnchor="middle" opacity=".85">{brand}</text>
        <rect x={x + w * 0.22} y={y + h * 0.62} width={w * 0.56} height="1.4" rx="1" fill={cap} opacity=".28" />
        <rect x={x + w * 0.32} y={y + h * 0.76} width={w * 0.36} height="1.2" rx="1" fill={cap} opacity=".18" />
      </g>
    )
  }

  switch (type) {
    case 'jar':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="109" rx="36" ry="6" fill="rgba(37,28,23,.08)" />
          <rect x="28" y="48" width="64" height="58" rx="15" fill={glass} />
          <rect x="28" y="48" width="64" height="22" rx="11" fill={liquid} opacity=".5" />
          <rect x="24" y="34" width="72" height="22" rx="10" fill={cap} />
          <rect x="24" y="34" width="72" height="7" rx="6" fill="#fff" opacity=".12" />
          <Label x="40" y="74" w="40" h="24" />
          <Shine x="34" y="54" w="5" h="46" />
        </svg>
      )
    case 'tube':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="111" rx="22" ry="5" fill="rgba(37,28,23,.08)" />
          <path d="M44 40 L76 40 L70 104 Q60 110 50 104 Z" fill={glass} />
          <path d="M44 40 L76 40 L74 60 L46 60 Z" fill={liquid} opacity=".68" />
          <rect x="49" y="18" width="22" height="24" rx="5" fill={cap} />
          <rect x="45" y="38" width="30" height="6" rx="3" fill={cap} />
          <Label x="48" y="66" w="24" h="28" />
          <Shine x="50" y="46" w="4" h="54" />
        </svg>
      )
    case 'pump':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="110" rx="27" ry="5" fill="rgba(37,28,23,.08)" />
          <rect x="37" y="40" width="46" height="66" rx="13" fill={glass} />
          <rect x="37" y="74" width="46" height="32" rx="13" fill={liquid} opacity=".5" />
          <rect x="52" y="25" width="16" height="16" rx="3" fill={cap} />
          <rect x="56" y="12" width="8" height="16" rx="3" fill={cap} />
          <rect x="64" y="14" width="17" height="6" rx="3" fill={cap} />
          <Label x="46" y="60" w="28" h="34" />
          <Shine x="43" y="46" w="5" h="52" />
        </svg>
      )
    case 'lipstick':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="110" rx="18" ry="5" fill="rgba(37,28,23,.08)" />
          <rect x="45" y="54" width="30" height="52" rx="5" fill={cap} />
          <rect x="47" y="44" width="26" height="12" rx="2" fill={glass} />
          <path d="M49 44 L71 44 L71 28 Q67 16 60 16 Q53 16 49 28 Z" fill={liquid} />
          <text x="60" y="86" fontFamily="Fraunces, Georgia, serif" fontSize="11" fontWeight="600"
            fill={label} textAnchor="middle" opacity=".9">{brand}</text>
          <Shine x="49" y="58" w="3" h="42" />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="110" rx="30" ry="5" fill="rgba(37,28,23,.08)" />
          <path d="M38 56 Q38 45 49 43 L49 34 L71 34 L71 43 Q82 45 82 56 L82 96 Q82 106 71 106 L49 106 Q38 106 38 96 Z" fill={glass} />
          <path d="M38 80 L82 80 L82 96 Q82 106 71 106 L49 106 Q38 106 38 96 Z" fill={liquid} opacity=".55" />
          <rect x="49" y="18" width="22" height="18" rx="3" fill={cap} />
          <rect x="45" y="32" width="30" height="6" rx="2" fill={cap} />
          <Label x="48" y="58" w="24" h="32" />
          <Shine x="44" y="50" w="5" h="50" />
        </svg>
      )
    case 'compact':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="101" rx="42" ry="7" fill="rgba(37,28,23,.08)" />
          <ellipse cx="60" cy="76" rx="42" ry="27" fill={cap} />
          <ellipse cx="60" cy="69" rx="42" ry="27" fill={glass} />
          <ellipse cx="60" cy="67" rx="31" ry="19" fill={liquid} opacity=".82" />
          <text x="60" y="73" fontFamily="Fraunces, Georgia, serif" fontSize="16" fontWeight="600"
            fill="#FDFAF4" textAnchor="middle" opacity=".85">{brand}</text>
          <ellipse cx="49" cy="60" rx="9" ry="5" fill="#fff" opacity=".25" />
        </svg>
      )
    case 'mist':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="110" rx="25" ry="5" fill="rgba(37,28,23,.08)" />
          <rect x="42" y="46" width="38" height="60" rx="11" fill={glass} />
          <rect x="42" y="80" width="38" height="26" rx="11" fill={liquid} opacity=".5" />
          <rect x="50" y="29" width="22" height="18" rx="4" fill={cap} />
          <circle cx="86" cy="33" r="5" fill={cap} opacity=".4" />
          <circle cx="94" cy="27" r="2.6" fill={cap} opacity=".3" />
          <Label x="48" y="62" w="26" h="32" />
          <Shine x="46" y="52" w="4" h="50" />
        </svg>
      )
    case 'dropper':
    default:
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="110" rx="22" ry="5" fill="rgba(37,28,23,.08)" />
          <rect x="43" y="48" width="34" height="58" rx="11" fill={glass} />
          <rect x="43" y="74" width="34" height="32" rx="11" fill={liquid} opacity=".68" />
          <rect x="47" y="20" width="26" height="30" rx="4" fill={cap} />
          <rect x="56" y="6" width="8" height="18" rx="4" fill={cap} opacity=".85" />
          <rect x="58" y="48" width="4" height="40" rx="2" fill={cap} opacity=".35" />
          <Label x="48" y="62" w="24" h="30" />
          <Shine x="47" y="54" w="4" h="48" />
        </svg>
      )
  }
}

function withAlpha(hex, a) {
  const c = hex.replace('#', '')
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${a})`
}
