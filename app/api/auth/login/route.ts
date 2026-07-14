import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Mock authentication - in production, verify against database
    if (email === 'demo@example.com' && password === 'password') {
      return NextResponse.json(
        {
          success: true,
          user: {
            id: '1',
            email: email,
            name: 'Demo User',
          },
          token: 'mock-jwt-token',
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
