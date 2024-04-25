'use client'

import { BottomRow } from './bottom-row'
import { ExtraLinks } from './extra-links'
import clsx from 'clsx'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={`w-full bg-popover`}>
      <div
        className={clsx(
          'container mx-auto',
          'mb-9 flex flex-col justify-between gap-9 p-3 py-6 md:flex-row',
        )}>
        <div className="max-w-1/4">
          <Image
            src="/logo.png"
            width={172}
            height={42}
            title="Website for Finding and Copying Emojis"
            alt="Emoji you, Find and Copy Emojis Easily"
            placeholder="blur"
            blurDataURL="/logo.png"
            className="mb-6"
          />
          <p className="font-semibold">
            Search for emojis with just one click! Explore a variety of emojis
          </p>
        </div>
        <ExtraLinks />
      </div>
      <BottomRow />
    </footer>
  )
}

export default Footer
