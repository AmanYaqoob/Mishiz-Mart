import { useState } from 'react'
import { useStore } from '../store/StoreContext'

export default function AuthModal() {
  const { authOpen, setAuthOpen, user, login, signup, logout } = useStore()
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')

  const close = () => { setAuthOpen(false); setErr('') }
  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setErr('')
    const res = mode === 'login'
      ? login(form.email.trim(), form.password)
      : signup(form.name.trim(), form.email.trim(), form.password)
    if (!res.ok) { setErr(res.error); return }
    setForm({ name: '', email: '', password: '' })
    close()
  }

  return (
    <div className={`modal ${authOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="modal-card">
        <button className="close-x" onClick={close} aria-label="Close">✕</button>

        {user ? (
          <div className="welcome">
            <div className="av">{user.name.charAt(0).toUpperCase()}</div>
            <span className="eyebrow">Signed in</span>
            <h3>Hello, <em>{user.name.split(' ')[0]}</em></h3>
            <p className="modal-sub">{user.email}</p>
            <button className="btn btn-ghost" onClick={() => { logout(); close() }}>Sign out</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">{mode === 'login' ? 'Welcome back' : 'Join the ritual'}</span>
            <h3>{mode === 'login' ? 'Log in' : 'Create'} <em>account</em></h3>
            <p className="modal-sub">
              {mode === 'login' ? 'Access your bag and saved favourites.' : 'Members get early access to drops & edits.'}
            </p>

            {err && <div className="modal-err">{err}</div>}

            <form onSubmit={submit}>
              {mode === 'signup' && (
                <div className="field">
                  <label>Full name</label>
                  <input value={form.name} onChange={update('name')} required placeholder="Ava Rosewood" />
                </div>
              )}
              <div className="field">
                <label>Email</label>
                <input type="email" value={form.email} onChange={update('email')} required placeholder="you@email.com" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" value={form.password} onChange={update('password')} required minLength={4} placeholder="••••••••" />
              </div>
              <button className="btn btn-rose" type="submit">
                {mode === 'login' ? 'Log in' : 'Create account'}
              </button>
            </form>

            <p className="modal-switch">
              {mode === 'login' ? "New here? " : 'Already a member? '}
              <button onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setErr('') }}>
                {mode === 'login' ? 'Create an account' : 'Log in'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
