export type SkillGroup = { label: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'C++', 'Python'] },
  { label: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Databases', items: ['MongoDB (Mongoose)', 'PostgreSQL'] },
  { label: 'Cloud & DevOps', items: ['AWS S3', 'Vercel'] },
  { label: 'Developer Tools', items: ['Git/GitHub', 'Figma', 'Docker', 'Chrome Extension APIs'] },
]
