import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface TypoProps extends PropsWithChildren {
  className?: string
  el?: string
}

export function Head1({ children, className, el: Wrapper = 'h1' }: TypoProps) {
  return (
    <h1
      className={clsx(
        'mt-6 scroll-m-20 pb-2',
        'font-extrabold tracking-tight text-primary transition-colors first:mt-0',
        'text-2xl lg:text-3xl',
        className,
      )}>
      {children}
    </h1>
  )
}

export function Head2({ children, className, el: Wrapper = 'h2' }: TypoProps) {
  return (
    <h2
      className={clsx(
        'mt-6 scroll-m-20 pb-2 font-semibold tracking-tight text-primary transition-colors first:mt-0',
        'text-2xl',
        className,
      )}>
      {children}
    </h2>
  )
}

export function Head3({ children, className, el: Wrapper = 'h3' }: TypoProps) {
  return (
    <h3
      className={clsx(
        'mt-6 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className }: TypoProps) {
  return (
    <p
      className={clsx(
        'text-slate',
        'leading-7 [&:not(:first-child)]:mt-1',
        className,
      )}>
      {children}
    </p>
  )
}

export function Article({ children, className }: TypoProps) {
  return (
    <article
      className={clsx(
        'prose-slate mx-auto dark:prose-invert lg:prose-xl',
        className,
      )}>
      {children}
    </article>
  )
}
