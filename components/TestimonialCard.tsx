import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const name = getMetafieldValue(testimonial.metadata?.client_name)
  const company = getMetafieldValue(testimonial.metadata?.client_company)
  const photo = testimonial.metadata?.client_photo

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      {quote && <p className="text-slate-700 leading-relaxed italic flex-1">"{quote}"</p>}
      <div className="mt-6 flex items-center gap-4">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          {name && <p className="text-sm font-bold text-slate-900">{name}</p>}
          {company && <p className="text-xs text-slate-500">{company}</p>}
        </div>
      </div>
    </div>
  )
}