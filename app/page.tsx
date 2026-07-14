import Hero from './components/Hero'
import Features from './components/Features'
import CoursesGrid from './components/CoursesGrid'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Popular Courses
          </h2>
          <CoursesGrid />
        </div>
      </section>
    </div>
  )
}
