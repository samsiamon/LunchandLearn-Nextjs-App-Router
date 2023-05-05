import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Link href={''}>Home</Link>
        <Link href={'/products'}>Our Products</Link>
      </nav>
    </main>
  )
}
