import { NextRequest, NextResponse } from 'next/server'
import { addSignup, getSignups, updateSignup } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, interests, referralSource } = body

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Get client IP for analytics
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    const normalizedEmail = email.toLowerCase().trim()
    const signups = getSignups()
    const existing = signups.find(s => s.email.toLowerCase() === normalizedEmail)

    // Check if we have additional data to update
    const hasAdditionalData = (name && name.trim()) || 
                              (interests && interests.length > 0) || 
                              (referralSource && referralSource.trim())

    // If signup exists and we have additional data, update it
    if (existing && hasAdditionalData) {
      try {
        const updated = updateSignup(normalizedEmail, {
          name: name?.trim() || undefined,
          interests: interests && interests.length > 0 ? interests : undefined,
          referralSource: referralSource?.trim() || undefined,
        })

        return NextResponse.json({ 
          success: true,
          message: 'Thank you for joining!',
          signup: updated,
        })
      } catch (error: any) {
        if (error.message === 'SIGNUP_NOT_FOUND') {
          // Fall through to create new signup
        } else {
          throw error
        }
      }
    }

    // If signup exists but no additional data, just return success (step 1 completed)
    if (existing && !hasAdditionalData) {
      return NextResponse.json({ 
        success: true,
        message: 'Email confirmed!',
        signup: existing,
      })
    }

    // Create new signup
    try {
      const signup = addSignup({
        email: normalizedEmail,
        name: name?.trim(),
        interests,
        referralSource,
        ip,
      })

      // In production, you would send an email here
      // For now, we'll just return success
      // Example: await sendWelcomeEmail(signup.email, signup.name)

      return NextResponse.json({ 
        success: true,
        message: 'Thank you for joining!',
        signup,
      })
    } catch (error: any) {
      if (error.message === 'DUPLICATE_EMAIL') {
        // This shouldn't happen now, but handle it just in case
        return NextResponse.json(
          { error: 'This email is already registered. You\'re already on the list!' },
          { status: 409 }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // For admin purposes - in production, add authentication
  const signups = getSignups()
  return NextResponse.json({ count: signups.length })
}

