import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export default function GridCards({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'w-full mx-0 grid md:mx-auto',
        // sm
        'gap-y-6',
        'grid-cols-1 ', // <md show 4 grids
        // md
        'md:grid-cols-2', // >md <lg show 6 grids
        'md:gap-x-6 md:gap-y-6',
        // lg
        'lg:grid-cols-3', // >lg show 8 grids
      )}>
      {children}
    </div>
  )
}

export function GridIconView({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'w-full mx-0 grid md:mx-auto',
        // sm
        'gap-x-2 gap-y-2 ',
        'grid-cols-4 ', // <md show 4 grids
        // md
        'md:grid-cols-6', // >md <lg show 6 grids
        'md:gap-x-3 md:gap-y-3',
        // lg
        'lg:grid-cols-8', // >lg show 8 grids
      )}>
      {children}
    </div>
  )
}
