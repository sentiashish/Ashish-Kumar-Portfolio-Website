import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center px-5 py-20 md:px-10">
      <p className="mono mb-5 text-xs uppercase tracking-[0.22em] text-amber">404 / Page not found</p>
      <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-soft md:text-7xl">This page does not exist.</h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base">
        The page you are looking for may have been moved or removed. You can return to the homepage to view projects, skills, and contact details.
      </p>
      <Link
        href="/"
        className="mono mt-10 inline-flex items-center gap-2 border border-line bg-panel px-4 py-3 text-xs uppercase tracking-widest text-soft transition-colors hover:border-amber hover:text-amber"
      >
        Go to homepage
      </Link>
    </main>
  )
}
