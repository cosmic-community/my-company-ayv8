// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const content = getMetafieldValue(caseStudy.metadata?.content)
  const keyResults = getMetafieldValue(caseStudy.metadata?.key_results)
  const hero = caseStudy.metadata?.hero_image
  const relatedService = caseStudy.metadata?.related_service

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container-wide py-16">
          <Link href="/case-studies" className="text-sm text-slate-300 hover:text-white transition-colors">
            ← Back to Case Studies
          </Link>
          {client && (
            <span className="block mt-6 text-sm font-semibold text-primary-light uppercase tracking-wider">
              {client}
            </span>
          )}
          <h1 className="mt-2 text-4xl font-extrabold">{title}</h1>
          {summary && <p className="mt-4 max-w-2xl text-lg text-slate-300">{summary}</p>}
        </div>
      </section>

      <div className="container-wide py-16">
        {hero && (
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={`${hero.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={title}
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {content && (
              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>

          <aside className="space-y-6">
            {keyResults && (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  Key Results
                </h3>
                <div
                  className="prose prose-sm prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: keyResults }}
                />
              </div>
            )}

            {relatedService && (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  Related Service
                </h3>
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark"
                >
                  {getMetafieldValue(relatedService.metadata?.icon_emoji)}
                  {getMetafieldValue(relatedService.metadata?.name) || relatedService.title}
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}