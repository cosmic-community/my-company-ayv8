import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials — My Company',
  description: 'Read what our clients say about working with us.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-wide py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Client Testimonials</h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Don't just take our word for it—hear directly from the businesses we've helped.
        </p>
      </div>

      {testimonials.length === 0 ? (
        <p className="text-center text-slate-500">No testimonials available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  )
}