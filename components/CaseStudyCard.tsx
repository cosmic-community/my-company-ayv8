import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const hero = caseStudy.metadata?.hero_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {hero && (
        <div className="aspect-video overflow-hidden bg-slate-100">
          <img
            src={`${hero.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {client && (
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            {client}
          </span>
        )}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {summary && <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">{summary}</p>}
      </div>
    </Link>
  )
}