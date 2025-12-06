import { NextResponse } from 'next/server'
import { getSignups, getStats } from '@/lib/db'

export async function GET() {
  try {
    const signups = getSignups()
    const stats = getStats()
    
    return NextResponse.json({
      signups,
      stats,
    })
  } catch (error) {
    console.error('Error fetching signups:', error)
    return NextResponse.json(
      { error: 'Failed to fetch signups' },
      { status: 500 }
    )
  }
}

