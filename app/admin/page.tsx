'use client'

import { useEffect, useState } from 'react'
import { Download, RefreshCw, Users, Calendar, TrendingUp } from 'lucide-react'

interface Signup {
  email: string
  name?: string
  interests?: string[]
  referralSource?: string
  timestamp: string
}

export default function AdminPage() {
  const [signups, setSignups] = useState<Signup[]>([])
  const [stats, setStats] = useState<any>(null)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'
    if (password === correctPassword) {
      setIsAuthenticated(true)
      loadData()
    } else {
      alert('Incorrect password')
    }
  }

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/signups')
      const data = await response.json()
      setSignups(data.signups || [])
      setStats(data.stats || null)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleExport = async () => {
    try {
      const response = await fetch('/api/signups')
      const data = await response.json()
      const signups = data.signups || []
      
      const headers = ['Email', 'Name', 'Interests', 'Referral Source', 'Timestamp']
      const rows = signups.map((s: Signup) => [
        s.email,
        s.name || '',
        s.interests?.join('; ') || '',
        s.referralSource || '',
        s.timestamp,
      ])
      
      const csv = [
        headers.join(','),
        ...rows.map((row: string[]) => row.map(cell => `"${cell}"`).join(',')),
      ].join('\n')
      
      const blob = new Blob([csv], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `signups-${new Date().toISOString().split('T')[0]}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Export error:', error)
      alert('Failed to export. Please try again.')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-coffee-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-coffee-900 mb-6">Admin Dashboard</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-coffee-900 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-coffee-200 rounded-lg focus:border-accent-orange focus:outline-none"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange/90 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-coffee-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-coffee-900 mb-2">Admin Dashboard</h1>
              <p className="text-earth-600">Founding Member Signups</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={loadData}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-coffee-100 text-coffee-900 rounded-lg hover:bg-coffee-200 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-accent-green text-white rounded-lg hover:bg-accent-green/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          {stats && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-coffee-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-accent-orange" />
                  <h3 className="font-semibold text-coffee-900">Total Signups</h3>
                </div>
                <p className="text-3xl font-bold text-coffee-900">{stats.total}</p>
              </div>
              <div className="bg-coffee-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-accent-green" />
                  <h3 className="font-semibold text-coffee-900">Today</h3>
                </div>
                <p className="text-3xl font-bold text-coffee-900">
                  {stats.byDay[new Date().toISOString().split('T')[0]] || 0}
                </p>
              </div>
              <div className="bg-coffee-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-coffee-600" />
                  <h3 className="font-semibold text-coffee-900">This Week</h3>
                </div>
                <p className="text-3xl font-bold text-coffee-900">
                  {Object.values(stats.byDay).slice(-7).reduce((a: number, b: unknown) => a + (typeof b === 'number' ? b : 0), 0)}
                </p>
              </div>
            </div>
          )}

          {/* Signups Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-coffee-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-coffee-900">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-coffee-900">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-coffee-900">Interests</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-coffee-900">Source</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-coffee-900">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-coffee-100">
                {signups.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-earth-600">
                      No signups yet
                    </td>
                  </tr>
                ) : (
                  signups.map((signup, index) => (
                    <tr key={index} className="hover:bg-coffee-50">
                      <td className="px-4 py-3 text-sm text-earth-800">{signup.email}</td>
                      <td className="px-4 py-3 text-sm text-earth-800">{signup.name || '-'}</td>
                      <td className="px-4 py-3 text-sm text-earth-800">
                        {signup.interests?.join(', ') || '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-earth-800">{signup.referralSource || '-'}</td>
                      <td className="px-4 py-3 text-sm text-earth-600">
                        {new Date(signup.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

