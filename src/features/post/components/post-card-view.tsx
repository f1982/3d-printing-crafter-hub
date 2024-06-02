import React from 'react'

import clsx from 'clsx'
import { sampleSize } from 'lodash'
import { Link2 } from 'lucide-react'
import Link from 'next/link'

import HoverScaleImage from '@/components/atoms/hover-scale-image'
import { Badge } from '@/components/ui/badge'

interface BlogPostItemProps {
  title: string
  coverImage: string
  date: string
  description: string
  url: string
  tags: string[]
}

const PostItemView: React.FC<BlogPostItemProps> = ({
  title,
  coverImage,
  description,
  date,
  url,
  tags,
}) => (
  <div className="flex w-full flex-col gap-3">
    <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl">
      <Link href={url} scroll={false}>
        <HoverScaleImage src={coverImage} alt={title} />

        <h1
          className={clsx(
            'pointer-events-none absolute left-0 top-0 z-10 p-5 text-lg font-bold leading-5 text-white',
          )}>
          {title}
        </h1>
        {/* If content is a url, show a link icon */}
        {url.startsWith('http') && (
          <span className="pointer-events-none absolute bottom-2 left-3 text-muted">
            <Link2 className="text-primary-foreground" />
          </span>
        )}
        {/* Tags */}
        <div className="pointer-events-none absolute bottom-3 right-3 text-muted">
          {sampleSize(tags, 2)?.map((tag) => (
            <Badge
              key={tag}
              className={clsx(
                'mr-2 rounded-xl text-xs',
                'bg-popover text-popover-foreground',
              )}>
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
    </div>

    <div>
      <span className="text-xs text-muted-foreground">{date}</span>
      <p>{description}</p>
    </div>
  </div>
)

export default PostItemView
