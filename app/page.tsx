import Link from 'next/link'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container-wide py-24 sm:py-32 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Professional services that<br className="hidden sm:block" /> drive real results
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            We help businesses grow with expert services, a dedicated team, and a proven track record.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/services" className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-semibold transition-colors">
              Explore Services
            </Link>
            <Link href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.length > 0 && (
        <section className="container-wide py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Services</h2>
            <p className="mt-3 text-slate-600">Comprehensive solutions tailored to your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="bg-white border-y border-slate-200">
          <div className="container-wide py-20">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">Case Studies</h2>
                <p className="mt-3 text-slate-600">Real outcomes for real clients.</p>
              </div>
              <Link href="/case-studies" className="hidden sm:inline-flex text-sm font-semibold text-primary hover:text-primary-dark">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.slice(0, 3).map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {team.length > 0 && (
        <section className="container-wide py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Meet the Team</h2>
            <p className="mt-3 text-slate-600">The experts behind your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(0, 4).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-slate-100">
          <div className="container-wide py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">What Clients Say</h2>
              <p className="mt-3 text-slate-600">Trusted by businesses like yours.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}