import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from '@/lib/mongodb'
import bcrypt from 'bcryptjs'

// Mock user for demo (in production, use database)
const users = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: '$2a$10$yourhashedpassword', // You'll need to generate this
  },
]

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // In production, query your database
        const user = users.find(user => user.email === credentials.email)
        
        if (user && credentials.password === 'password123') {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }