import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CalculatorPage from './pages/CalculatorPage'
import HistoryPage from './pages/HistoryPage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { loadHistory, saveHistory } from './utils/storage'
import { useAuth } from './contexts/AuthContext'

function PrivateRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="container" style={{ padding: 24 }}>
        Loading...
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    setHistory(loadHistory())
  }, [])

  useEffect(() => {
    saveHistory(history)
  }, [history])

  function addEntry(entry) {
    setHistory(prev => [entry, ...prev].slice(0, 500))
  }

  function updateEntry(idx, entry) {
    setHistory(prev => prev.map((p, i) => (i === idx ? entry : p)))
  }

  function deleteEntry(idx) {
    setHistory(prev => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard history={history} />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <CalculatorPage onAdd={addEntry} />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <HistoryPage
                  history={history}
                  onEdit={updateEntry}
                  onDelete={deleteEntry}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
