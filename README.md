# My Company

![App Preview](https://imgix.cosmicjs.com/90af4190-63d3-11f1-ac8c-330ac011d850-autopilot-photo-1472099645785-5658abf4ff4e-1780989574178.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive professional services company website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your services, introduce your team, highlight case studies, and display glowing client testimonials—all managed through your Cosmic bucket.

## Features

- 🏠 **Stunning Homepage** with hero, featured services, team preview, case studies, and testimonials
- 🛠️ **Services** listing and detail pages with rich content
- 👥 **Team Members** with photos, bios, and social links
- 📊 **Case Studies** with hero images, key results, and related services
- 💬 **Client Testimonials** displayed in elegant cards
- 📱 **Fully Responsive** design that looks great on all devices
- ⚡ **Server-Side Rendering** for blazing-fast performance and SEO
- 🎨 **Modern UI** with Tailwind CSS and smooth transitions

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a27be2e7da35436b10e9216&clone_repository=6a27bf2c7da35436b10e9285)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Create a `.env.local` file with your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```
4. Run the development server:
   ```bash
   bun run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single case study with related service
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket using these object types:

- **services** — Service offerings with name, icon emoji, descriptions, details, and featured image
- **team-members** — Team profiles with name, job title, bio, photo, email, and LinkedIn
- **case-studies** — Case studies with client name, summary, content, key results, related service, and hero image
- **testimonials** — Client testimonials with quote, client name, company, photo, and related service

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Add your environment variables
4. Deploy!

<!-- README_END -->