// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A PRODUCT (your own house label — no third-party brand)
//
// Copy any line below and change the fields. id must be unique.
//   id     : unique string (e.g. 'sk6')
//   name   : product name (your wording — no outside brand)
//   cat    : 'Skin' | 'Body' | 'Hair' | 'Scent'
//   vessel : fallback bottle style if no photo — 'dropper' | 'jar' | 'tube'
//            | 'pump' | 'lipstick' | 'flask' | 'compact' | 'mist'
//   price  : number ;  compare : (optional) old price → shows a "Sale" tag
//   tint   : the product/liquid color (hex)
//   bg     : the card background tint (hex)
//   note   : one-line description
//   image  : real photo in /public, e.g. '/products/sk1.png'
//            (remove this line to fall back to the drawn vessel)
// ─────────────────────────────────────────────────────────────────────────────
export const CATEGORIES = ['All', 'Skin', 'Body', 'Hair', 'Scent']

export const products = [
  // ---- SKIN ----
  { id: 'sk1', name: 'Dewdrop Serum', cat: 'Skin', vessel: 'dropper', price: 38, compare: 46, tint: '#C9A24B', bg: '#F6ECD3', image: '/products/sk1.png', note: 'Hyaluronic + niacinamide for a glass-skin finish.' },
  { id: 'sk2', name: 'Velvet Cloud Cream', cat: 'Skin', vessel: 'jar', price: 44, tint: '#E3AE9F', bg: '#F7E3DD', image: '/products/sk2.png', note: 'Whipped peptide moisturiser that melts in.' },
  { id: 'sk3', name: 'Morning Mist Toner', cat: 'Skin', vessel: 'mist', price: 26, tint: '#8E9173', bg: '#E9EBDD', image: '/products/sk3.png', note: 'Rosewater + green tea to wake the skin.' },
  { id: 'sk4', name: 'Midnight Repair Oil', cat: 'Skin', vessel: 'dropper', price: 52, compare: 60, tint: '#4A2C39', bg: '#EADAE0', image: '/products/sk4.png', note: 'Cold-pressed botanicals for overnight renewal.' },
  { id: 'sk5', name: 'Sunlit SPF 40 Fluid', cat: 'Skin', vessel: 'pump', price: 34, tint: '#C9A24B', bg: '#F6ECD3', image: '/products/sk5.png', note: 'Invisible mineral shield, no white cast.' },

  // ---- BODY ----
  { id: 'bd1', name: 'Silk Body Lotion', cat: 'Body', vessel: 'pump', price: 30, tint: '#E3AE9F', bg: '#F7E3DD', image: '/products/bd1.png', note: 'Fast-absorbing daily lotion for soft, supple skin.' },
  { id: 'bd2', name: 'Nourish Body Oil', cat: 'Body', vessel: 'dropper', price: 36, compare: 44, tint: '#C9A24B', bg: '#F6ECD3', image: '/products/bd2.png', note: 'Dry-touch oil that leaves a lit-from-within glow.' },
  { id: 'bd3', name: 'Polish Sugar Scrub', cat: 'Body', vessel: 'jar', price: 28, tint: '#C77B63', bg: '#F4E2D8', image: '/products/bd3.png', note: 'Sugar + shea buff away dullness, never strips.' },
  { id: 'bd4', name: 'Cloud Body Wash', cat: 'Body', vessel: 'pump', price: 24, tint: '#8E9173', bg: '#E9EBDD', image: '/products/bd4.png', note: 'Gentle, sulphate-free lather with a soft finish.' },
  { id: 'bd5', name: 'Whipped Body Butter', cat: 'Body', vessel: 'jar', price: 34, tint: '#4A2C39', bg: '#EADAE0', image: '/products/bd5.png', note: 'Rich overnight butter for elbows, knees and ends.' },

  // ---- HAIR ----
  { id: 'ha1', name: 'Silk Repair Shampoo', cat: 'Hair', vessel: 'pump', price: 29, tint: '#8E9173', bg: '#E9EBDD', image: '/products/ha1.png', note: 'Sulphate-free wash that respects your color.' },
  { id: 'ha2', name: 'Glass Hair Conditioner', cat: 'Hair', vessel: 'pump', price: 29, tint: '#C77B63', bg: '#F4E2D8', image: '/products/ha2.png', note: 'Slip-rich rinse for tangle-free strands.' },
  { id: 'ha3', name: 'Featherlight Hair Oil', cat: 'Hair', vessel: 'dropper', price: 36, compare: 42, tint: '#C9A24B', bg: '#F6ECD3', image: '/products/ha3.png', note: 'Smooths frizz, never greasy.' },
  { id: 'ha4', name: 'Volume Root Mist', cat: 'Hair', vessel: 'mist', price: 27, tint: '#E3AE9F', bg: '#F7E3DD', image: '/products/ha4.png', note: 'Lift and texture from the root up.' },
  { id: 'ha5', name: 'Weekly Bond Mask', cat: 'Hair', vessel: 'jar', price: 38, tint: '#4A2C39', bg: '#EADAE0', image: '/products/ha5.png', note: 'Deep treatment that rebuilds tired ends.' },

  // ---- SCENT ----
  { id: 'sc1', name: 'Fig & Cashmere', cat: 'Scent', vessel: 'flask', price: 68, tint: '#8E9173', bg: '#E9EBDD', image: '/products/sc1.png', note: 'Green fig, milky woods, warm musk.' },
  { id: 'sc2', name: 'Rose Noir', cat: 'Scent', vessel: 'flask', price: 72, compare: 84, tint: '#A85742', bg: '#F4DAD2', image: '/products/sc2.png', note: 'Dark rose laced with oud and saffron.' },
  { id: 'sc3', name: 'Amber Hour', cat: 'Scent', vessel: 'flask', price: 70, tint: '#C9A24B', bg: '#F6ECD3', image: '/products/sc3.png', note: 'Amber, vanilla orchid and tonka.' },
  { id: 'sc4', name: 'Citrus Linen', cat: 'Scent', vessel: 'mist', price: 32, tint: '#C9A24B', bg: '#F6ECD3', image: '/products/sc4.png', note: 'A fresh body mist of bergamot and white tea.' },
  { id: 'sc5', name: 'Velvet Oud', cat: 'Scent', vessel: 'flask', price: 74, tint: '#4A2C39', bg: '#EADAE0', image: '/products/sc5.png', note: 'Smoky oud wrapped in soft suede and amber.' },
]
