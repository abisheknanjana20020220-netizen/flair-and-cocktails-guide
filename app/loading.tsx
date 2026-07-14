import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin">
          <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full"></div>
        </div>
        <p className="mt-4 text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
