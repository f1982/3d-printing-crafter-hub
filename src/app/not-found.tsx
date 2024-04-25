import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-1 flex-col items-center justify-center gap-6 py-6">
      <span className="text-9xl">🫥</span>
      <h2 className="text-xl">Page not found</h2>
      <p>Sorry, could not find requested resource</p>
      <Link href="/" title="Return home">
        Return 🏠
      </Link>
    </div>
  )
}
