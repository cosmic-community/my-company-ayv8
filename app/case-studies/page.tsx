import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies — My Company',
  description: 'Explore real outcomes we have delivered for our clients.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container-wide py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Case Studies</h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Real projects, real results. See how we have helped businesses succeed.
        </p>
      </div>

      {caseStudies.length === 0 ? (
        <p className="text-center text-slate-500">No case studies available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      )}
    </div>
  )
}