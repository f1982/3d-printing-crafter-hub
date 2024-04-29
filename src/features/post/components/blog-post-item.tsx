import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { sampleSize } from 'lodash'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostItemView: React.FC<{
  title: string
  coverImage: string
  date: string
  url: string
  tags: string[]
}> = ({ title, coverImage, date, url, tags }) => (
  <div className="w-full flex flex-col gap-3">
    <div className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden">
      <Link href={url} passHref>
        <Image
          className={clsx(
            'w-full h-full object-cover',
            'bg-primary',
            'ring-1 ring-muted',
            'scale-100 transition-all duration-300 ease-in-out hover:scale-110',
          )}
          src={coverImage}
          width={600}
          height={400}
          loading="lazy"
          alt={`${title} preview`}
        />

        {/* Top color mask layer */}
        <div
          className={clsx(
            'mb-3 absolute top-0 left-0 w-full h-full ',
            'bg-primary/30',
            'pointer-events-none',
          )}></div>

        <h1
          className={clsx(
            'text-lg absolute top-0 left-0 p-5 leading-5 font-bold text-white pointer-events-none',
          )}
          style={{
            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.6)',
          }}>
          {title}
        </h1>
        {/* If content is a url, show a link icon */}
        {url.startsWith('http') && (
          <span className="absolute left-3 bottom-2 text-muted pointer-events-none">
            <Link2 className="text-primary-foreground" />
          </span>
        )}
        {/* Tags */}
        <div className="absolute right-3 bottom-3 text-muted pointer-events-none">
          {sampleSize(tags, 2)?.map((tag) => (
            <Badge
              key={tag}
              className={clsx(
                'mr-2 text-xs rounded-xl',
                // 'bg-accent text-muted-foreground',
                'bg-popover text-popover-foreground',
              )}>
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
    </div>
    {/*  */}
    <div>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
  </div>
)

export default PostItemView
