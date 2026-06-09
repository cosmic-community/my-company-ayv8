import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const emoji = getMetafieldValue(service.metadata?.icon_emoji)
  const desc = getMetafieldValue(service.metadata?.short_description)

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
    >
      {emoji && <div className="text-4xl mb-4">{emoji}</div>}
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
        {name}
      </h3>
      {desc && <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>}
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
        Learn more
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}