import React, { createContext, useContext, useEffect, useState } from 'react'

const KEY = 'ct_user_v1'
const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    try{ const raw = localStorage.getItem(KEY); if(raw) setUser(JSON.parse(raw)) }catch(e){}
  },[])

  function signup({ name, email, password }){
    const u = { id: Date.now(), name, email }
    localStorage.setItem(KEY, JSON.stringify(u))
    setUser(u)
    return u
  }

  function login({ email, password }){
    // mock login: accept any credentials if user exists or create one
    const raw = localStorage.getItem(KEY)
    if(raw){ const u = JSON.parse(raw); setUser(u); return u }
    return signup({ name: 'User', email, password })
  }

  function logout(){ localStorage.removeItem(KEY); setUser(null) }

  return (
    <AuthContext.Provider value={{user, signup, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){ return useContext(AuthContext) }
