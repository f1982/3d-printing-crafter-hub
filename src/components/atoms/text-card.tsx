'use client'

import { PropsWithChildren } from 'react'

import clsx from 'clsx'

import { Button } from '../ui/button'

type TextCardProps = PropsWithChildren & {}
export default function TextCard(props: TextCardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg bg-white dark:bg-slate-800 ',
        'rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 ',
        'md:px-6 md:py-6',
        'px-3 py-3',
        'shadow-lg ring-1 ring-slate-900/5',
      )}>
      {props.children}
    </div>
  )
}

export function TextCardMultiple({
  subtitle,
  title,
  description,
  label,
  handleClick,
}: {
  subtitle?: string
  title?: string
  description?: string
  label?: string
  handleClick?: () => void
}) {
  return (
    <>
      {subtitle && (
        <span className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
          {subtitle}
        </span>
      )}
      {title && (
        <h3 className="title-font mb-3 text-lg font-semibold">{title}</h3>
      )}
      {description && (
        <p className="h-18 mb-3 flex-1 leading-relaxed">{description}</p>
      )}
      {handleClick && label && (
        <div className="flex flex-wrap items-center ">
          <Button
            onClick={() => {
              handleClick()
            }}>
            {label}
          </Button>
        </div>
      )}
    </>
  )
}
