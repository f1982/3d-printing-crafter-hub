'use client'

import { Button } from '../ui/button'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type TextCardProps = PropsWithChildren & {}
export default function TextCard(props: TextCardProps) {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-slate-800 rounded-lg ',
        'hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg ',
        'md:px-6 md:py-6',
        'px-3 py-3',
        'ring-1 ring-slate-900/5 shadow-lg',
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
        <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {subtitle}
        </span>
      )}
      {title && (
        <h3 className="title-font text-lg font-semibold mb-3">{title}</h3>
      )}
      {description && (
        <p className="leading-relaxed mb-3 h-18 flex-1">{description}</p>
      )}
      {handleClick && label && (
        <div className="flex items-center flex-wrap ">
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
