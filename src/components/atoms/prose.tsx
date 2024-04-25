import { PropsWithChildren } from 'react'

export default function Prose({ children }: PropsWithChildren) {
  return (
    <article className="prose prose-md dark:prose-invert max-w-none mb-9">
      {children}
    </article>
  )
}
