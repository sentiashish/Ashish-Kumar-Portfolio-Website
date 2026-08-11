export type Project = {
  title: string
  description: string
  tags: string[]
  highlights: string[]
  githubLink?: string
  demoLink?: string
  readme?: string
  coverImage: string
  gallery: string[]
  videoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  { title: 'LessMissed — Usability Intelligence Marketplace', description: 'A three-sided marketplace for collecting user behavior data. Includes a Chrome extension that captures five behavioral signals (gaze, click, scroll, hover, visibility) and an engagement-scoring engine that maps the data to 23 UX insight types.', tags: ['Next.js', 'React', 'MongoDB', 'AWS S3', 'TypeScript', 'Chrome Extension API', 'Webpack'], highlights: ['23 UX insight types', '5 behavioral signals tracked', '3-sided marketplace'], githubLink: 'https://github.com/sentiashish/lessmissed', coverImage: '/placeholder.jpg', gallery: [], featured: true },
  { title: 'Ayurveda Wellness Platform', description: 'A wellness platform with health assessments, doctor booking, and e-commerce. Added Razorpay payments and role-based access control across backend services.', tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Razorpay', 'RBAC'], highlights: ['Razorpay payments integrated', 'RBAC implemented', 'Health + e-commerce in one platform'], coverImage: '/placeholder.jpg', gallery: []},
  { title: 'AI Travel Planning Agent', description: 'An AI travel planning system with web and CLI interfaces. Generates itineraries from user preferences, budget constraints, and real-time data through a modular search architecture.', tags: ['Python', 'AI', 'CLI'], highlights: ['Web + CLI interface', 'Real-time data driven', 'Modular architecture'], githubLink: 'https://github.com/sentiashish/ai-travel-agent', coverImage: '/placeholder.jpg', gallery: [] },
] 

export const techStack = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'AWS', 'Python', 'C++']

