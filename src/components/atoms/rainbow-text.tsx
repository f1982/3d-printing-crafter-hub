import { WithClassName } from '@/types/types'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export default function RainbowText(props: PropsWithChildren & WithClassName) {
  return (
    <span
      className={clsx(
        'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline',
        props.className,
      )}>
      {props.children}
    </span>
  )
}
