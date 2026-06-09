import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-extrabold text-white mb-3">
              <span className="text-2xl">🏢</span>
              My Company
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Professional services that help your business thrive. Explore what we do and how we can help.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
            <p className="text-sm text-slate-400">
              Ready to start a project? Reach out to our team today.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-slate-500">
          © {year} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}