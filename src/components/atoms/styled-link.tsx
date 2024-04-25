'use client'

import { WithClassName } from '@/types/types'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export default function StyledLink(
  props: LinkProps & PropsWithChildren & WithClassName,
) {
  return (
    <Link
      className={clsx(
        'text-primary ',
        'hover:font-bold hover:underline',
        'font-semibold no-underline',
        props.className,
      )}
      {...props}>
      {props.children}
    </Link>
  )
}
