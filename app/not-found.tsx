import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-2xl text-gray-400 mb-8">Page Not Found</p>
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  )
}
