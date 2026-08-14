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
  { title: 'LessMissed — Usability Intelligence Marketplace', description: 'A three-sided marketplace for collecting user behavior data. Includes a Chrome extension that captures five behavioral signals (gaze, click, scroll, hover, visibility) and an engagement-scoring engine that maps the data to 23 UX insight types.', tags: ['MERN Stack', 'AWS'], highlights: ['23 UX insight types', '5 behavioral signals tracked', '3-sided marketplace'], githubLink: 'https://github.com/exploreanand/lessmissed.git', coverImage: '/placeholder.jpg', gallery: [], featured: true },
  { title: 'Ayurveda Wellness Platform', description: 'A wellness platform with health assessments, doctor booking, and e-commerce. Added Razorpay payments and role-based access control across backend services.', tags: ['MERN Stack'], highlights: ['Razorpay payments integrated', 'RBAC implemented', 'Health + e-commerce in one platform'], githubLink: 'https://github.com/aswin0-0/ayurveda_app.git', demoLink: 'https://ayurveda-app-two.vercel.app/', coverImage: '/Ayurved_project_screenshot.png', gallery: []},
  { title: 'AI Travel Planning Agent', description: 'An AI travel planning system with web and CLI interfaces. Generates itineraries from user preferences, budget constraints, and real-time data through a modular search architecture.', tags: ['Python'], highlights: ['Web + CLI interface', 'Real-time data driven', 'Modular architecture'], githubLink: 'https://github.com/sentiashish/AI-travel-agent.git', coverImage: '/placeholder.jpg', gallery: [] },
] 

export const techStack = ['C++', 'Python', 'SQL', 'AWS', 'MERN Stack', 'Data Structures & Algorithms']
