import clsx from 'clsx'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title?: string
  image: string
}

export function ImageCardView({ title = '', image, children }: Props) {
  return (
    <>
      <div
        className={clsx(
          'ring-1 ring-border flex flex-col bg-card rounded-xl overflow-hidden',
          // 'transition-shadow duration-900',
          // 'hover:shadow-lg',
        )}>
        <Image
          className={clsx(
            'w-full object-cover object-center scale-100',
            'h-36 lg:h-48',
            'transition-all duration-400 ease-out hover:scale-110',
          )}
          src={image}
          width={300}
          height={300}
          alt={title}
        />
        <div className="flex flex-col p-6 flex-1">{children}</div>
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
          'bg-card rounded-xl shadow-cla-blue overflow-hidden',
        )}>
        <Image
          className={clsx(
            'w-full sm:w-1/3 h-36 sm:h-full object-cover scale-100',
            'transition-all duration-400 hover:scale-110',
          )}
          src={image}
          width={300}
          height={300}
          alt={title}
        />
        <div className="flex flex-col p-6 flex-1">{children}</div>
      </div>
    </>
  )
}
