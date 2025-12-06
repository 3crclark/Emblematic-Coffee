import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const SIGNUPS_FILE = path.join(DATA_DIR, 'signups.json')

export interface Signup {
  email: string
  name?: string
  interests?: string[]
  referralSource?: string
  timestamp: string
  ip?: string
}

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Read all signups
export function getSignups(): Signup[] {
  ensureDataDir()
  
  if (!fs.existsSync(SIGNUPS_FILE)) {
    return []
  }

  try {
    const data = fs.readFileSync(SIGNUPS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading signups:', error)
    return []
  }
}

// Add a new signup
export function addSignup(signup: Omit<Signup, 'timestamp'>): Signup {
  ensureDataDir()
  
  const signups = getSignups()
  
  // Check for duplicate email
  const existingIndex = signups.findIndex(s => s.email.toLowerCase() === signup.email.toLowerCase())
  if (existingIndex !== -1) {
    throw new Error('DUPLICATE_EMAIL')
  }

  const newSignup: Signup = {
    ...signup,
    timestamp: new Date().toISOString(),
  }

  signups.push(newSignup)
  
  fs.writeFileSync(SIGNUPS_FILE, JSON.stringify(signups, null, 2))
  
  return newSignup
}

// Update an existing signup
export function updateSignup(email: string, updates: Partial<Omit<Signup, 'email' | 'timestamp'>>): Signup {
  ensureDataDir()
  
  const signups = getSignups()
  const existingIndex = signups.findIndex(s => s.email.toLowerCase() === email.toLowerCase())
  
  if (existingIndex === -1) {
    throw new Error('SIGNUP_NOT_FOUND')
  }

  // Update the existing signup
  signups[existingIndex] = {
    ...signups[existingIndex],
    ...updates,
  }

  fs.writeFileSync(SIGNUPS_FILE, JSON.stringify(signups, null, 2))
  
  return signups[existingIndex]
}

// Get signup stats
export function getStats() {
  const signups = getSignups()
  
  const byDay: Record<string, number> = {}
  signups.forEach(signup => {
    const date = new Date(signup.timestamp).toISOString().split('T')[0]
    byDay[date] = (byDay[date] || 0) + 1
  })

  return {
    total: signups.length,
    byDay,
    recent: signups.slice(-10).reverse(),
  }
}

// Export to CSV
export function exportToCSV(): string {
  const signups = getSignups()
  
  const headers = ['Email', 'Name', 'Interests', 'Referral Source', 'Timestamp']
  const rows = signups.map(s => [
    s.email,
    s.name || '',
    s.interests?.join('; ') || '',
    s.referralSource || '',
    s.timestamp,
  ])

  return [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
  ].join('\n')
}

