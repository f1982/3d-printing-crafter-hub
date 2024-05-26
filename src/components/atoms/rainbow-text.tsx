import { PropsWithChildren } from 'react'

import { WithClassName } from '@/types/types'
import clsx from 'clsx'

export default function RainbowText(props: PropsWithChildren & WithClassName) {
  return (
    <span
      className={clsx(
        'bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline',
        props.className,
      )}>
      {props.children}
    </span>
  )
}
