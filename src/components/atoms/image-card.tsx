import { PropsWithChildren } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

interface Props extends PropsWithChildren {
  title?: string
  image: string
}

export function ImageCardView({ title = '', image, children }: Props) {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-border',
          // 'transition-shadow duration-900',
          // 'hover:shadow-lg',
        )}>
        <Image
          className={clsx(
            'w-full scale-100 object-cover object-center',
            'h-36 lg:h-48',
            'duration-400 transition-all ease-out hover:scale-110',
          )}
          src={image}
          width={300}
          height={300}
          alt={title}
        />
        <div className="flex flex-1 flex-col p-6">{children}</div>
      </div>
    </>
  )
}

export function ImageCardHorizontalView({
  title = '',
  image,
  children,
}: Props) {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col items-center sm:flex-row',
          'shadow-cla-blue overflow-hidden rounded-xl bg-card',
        )}>
        <Image
          className={clsx(
            'h-36 w-full scale-100 object-cover sm:h-full sm:w-1/3',
            'duration-400 transition-all hover:scale-110',
          )}
          src={image}
          width={300}
          height={300}
          alt={title}
        />
        <div className="flex flex-1 flex-col p-6">{children}</div>
      </div>
    </>
  )
}
