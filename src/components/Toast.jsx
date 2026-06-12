import { useStore } from '../store/StoreContext'

export default function Toast() {
  const { toast } = useStore()
  return (
    <div className={`toast ${toast ? 'show' : ''}`} role="status">
      <span className="tick">✦</span> {toast}
    </div>
  )
}
