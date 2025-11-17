import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const nav = useNavigate()

  async function submit(e){
    e.preventDefault()
    auth.login({ email, password })
    nav('/')
  }

  return (
    <div className="card" style={{maxWidth:480, margin:'20px auto'}}>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <div className="form-row"><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="form-row"><input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn">Login</button>
          <Link to="/signup" style={{alignSelf:'center'}} className="muted">Create account</Link>
        </div>
      </form>
    </div>
  )
}
