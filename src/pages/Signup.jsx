import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    auth.signup({ name, email, password })
    nav('/')
  }

  return (
    <div className="card" style={{maxWidth:520, margin:'20px auto'}}>
      <h3>Create account</h3>
      <form onSubmit={submit}>
        <div className="form-row"><input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} /></div>
        <div className="form-row"><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="form-row"><input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  )
}
