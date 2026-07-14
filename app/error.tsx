import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error',
  description: 'An error occurred',
}

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-8">{error.message}</p>
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  )
}
