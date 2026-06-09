import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services — My Company',
  description: 'Explore our comprehensive professional services.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-wide py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Comprehensive solutions designed to help your business grow and succeed.
        </p>
      </div>

      {services.length === 0 ? (
        <p className="text-center text-slate-500">No services available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}