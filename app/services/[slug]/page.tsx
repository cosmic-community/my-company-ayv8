// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, getCaseStudies, getMetafieldValue } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const emoji = getMetafieldValue(service.metadata?.icon_emoji)
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const details = getMetafieldValue(service.metadata?.details)
  const hero = service.metadata?.featured_image

  const allCaseStudies = await getCaseStudies()
  const related = allCaseStudies.filter(
    (cs) => cs.metadata?.related_service?.id === service.id
  )

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container-wide py-16">
          <Link href="/services" className="text-sm text-slate-300 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            {emoji && <span className="text-5xl">{emoji}</span>}
            <h1 className="text-4xl font-extrabold">{name}</h1>
          </div>
          {shortDesc && <p className="mt-4 max-w-2xl text-lg text-slate-300">{shortDesc}</p>}
        </div>
      </section>

      <div className="container-wide py-16">
        {hero && (
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={`${hero.imgix_url}?w=1600&h=700&fit=crop&auto=format,compress`}
              alt={name}
              width={800}
              height={350}
              className="w-full object-cover"
            />
          </div>
        )}

        {details && (
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        )}

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}