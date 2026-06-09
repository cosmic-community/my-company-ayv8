'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold text-slate-900">
          <span className="text-2xl">🏢</span>
          My Company
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-wide py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}