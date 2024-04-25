'use client'

import { disqus } from '@/config/setting'
import { DiscussionEmbed } from 'disqus-react'

export const DisqusComments = ({
  title,
  identifier,
  url,
}: {
  title: string
  identifier: string
  url: string
}) => {
  const disqusShortname = disqus.shortname
  const disqusConfig = {
    url,
    identifier, // Single post id
    title, // Single post title
  }
  return (
    <div className="mx-auto mb-6 max-w-3xl w-full">
      {/* @ts-ignore*/}
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
