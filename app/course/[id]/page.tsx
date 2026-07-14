import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course Details',
  description: 'Course details page',
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-4">Course {params.id}</h1>
        <p className="text-gray-400">Course details coming soon...</p>
      </div>
    </div>
  )
}
