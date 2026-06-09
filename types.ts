export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, unknown>;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    icon_emoji?: string;
    short_description?: string;
    details?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    job_title?: string;
    bio?: string;
    photo?: CosmicImage;
    email?: string;
    linkedin_url?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    client_name?: string;
    summary?: string;
    content?: string;
    key_results?: string;
    related_service?: Service;
    hero_image?: CosmicImage;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_company?: string;
    client_photo?: CosmicImage;
    related_service?: Service;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}