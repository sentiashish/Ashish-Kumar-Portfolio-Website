export const siteConfig = {
  url: 'https://ashishkumar.dev',
  name: 'Ashish Kumar',
  title: 'Ashish Kumar | Software Engineer & Final-Year Engineering Student | KJ Somaiya',
  description:
    'Ashish Kumar is a final-year Computer Engineering student at K. J. Somaiya College of Engineering, Mumbai, building software projects and seeking tech opportunities.',
  shortDescription:
    'Final-year Computer Engineering student at K. J. Somaiya College of Engineering, Mumbai, building software projects with C++, Python, MERN, SQL, and AWS.',
  role: 'Final-Year Computer Engineering Student & Aspiring Software Engineer',
  education: 'K. J. Somaiya College of Engineering, Mumbai',
  email: 'ashish19@somaiya.edu',
  location: 'Mumbai, India',
  sameAs: [
    'https://github.com/sentiashish',
    'https://linkedin.com/in/ashish-kumar-sentiashish',
  ],
  alternateNames: [
    'Ashish Singh',
    'Senti Ashish',
    'Ashish Kumar Singh',
    'Ashish K',
    'Ashish Kumar KJ Somaiya',
    'Ashish Singh KJ Somaiya',
  ],
} as const

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}
