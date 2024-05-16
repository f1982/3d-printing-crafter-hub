import QuizLogo from '@/assets/images/logo.png'
import Image from 'next/image'

import { Paragraph } from '../atoms/typography'

interface HeroProps {
  title?: string
  description?: string
  label?: string
  link?: string
}

export default function HomepageHero(props: HeroProps) {
  return (
    <div className="mx-auto px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="mb-16 flex flex-col sm:mb-0 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center rounded-full bg-indigo-50">
              <Image
                className="rounded-full"
                src={QuizLogo}
                width={62}
                height={62}
                alt="emoji quiz logo"
              />
            </div>
          </a>
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <h1 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
              🌟 Find the Perfect Emoji for Your Next Message 💬
            </h1>
            <Paragraph className="text-muted-foreground">
              Browse our extensive list of all the emojis 📚, sorted by category
              and searchable by keyword 🔍. Click on any emoji to copy and paste
              it directly into your message 📋.
            </Paragraph>
          </div>
          {/* <div>
            <Link href={`/category/movie`}>
              <Button title={`Start the emoji quiz`}>Get started</Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}
