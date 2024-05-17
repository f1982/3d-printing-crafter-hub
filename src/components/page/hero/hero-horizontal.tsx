import Image from 'next/image'
import Link from 'next/link'

import { staticUrl } from '@/config/setting'

import { Button } from '../../ui/button'
import { HeroProps } from './hero-type'

export default function HeroHorizontal(props: HeroProps) {
  return (
    <section>
      <div className="flex flex-col items-center md:flex-row md:py-10">
        <div className="md:w-1.5/2 mb-16 mt-5 flex flex-col items-center text-center md:mb-0 md:mt-0 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="mb-6 font-sans text-3xl font-bold leading-none  tracking-tight sm:text-4xl md:mx-auto">
            {props.title}
          </h1>
          <p className="mb-8 pl-2  pr-2 leading-relaxed text-muted-foreground md:pl-0">
            {props.description}
          </p>
          {props.label && props.link && (
            <div className="flex w-full flex-row justify-center gap-x-6 md:w-auto">
              <Link href={'/search'}>
                <Button>Start exploring</Button>
              </Link>
              <Link href={'/blog'}>
                <Button>Read articles</Button>
              </Link>
            </div>
          )}
        </div>
        <div className="mb-3 w-5/6 md:mb-0 md:w-1/2 lg:w-full ">
          <Image
            width={1024}
            height={1024}
            className="rounded object-cover object-center"
            alt="Emoji You"
            src={`${staticUrl('/images/homepage-hero-image.png')}`}
          />
        </div>
      </div>
    </section>
  )
}
