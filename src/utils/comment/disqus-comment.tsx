'use client'

import { DiscussionEmbed } from 'disqus-react'

import { disqus } from '@/config/setting'

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
    <div className="mx-auto mb-6 w-full max-w-3xl">
      {/* @ts-ignore*/}
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
