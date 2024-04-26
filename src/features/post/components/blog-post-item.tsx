import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
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
    <div className="cursor-pointer relative aspect-video w-full rounded-lg overflow-hidden">
      <Link href={url} passHref>
        <Image
          className={clsx(
            'w-full h-full rounded-xl object-cover',
            'ring-1 ring-muted',
          )}
          src={coverImage}
          width={600}
          height={400}
          alt={`${title} preview`}
        />

        <div className="mb-3 absolute top-0 left-0 w-full h-full bg-primary/20"></div>
        <h1 className="text-lg absolute top-0 left-0 p-6 font-bold text-white drop-shadow-xl">
          {title}
        </h1>
        {/* If content is a url, show a link icon */}
        {url.startsWith('http') && (
          <span className="absolute left-6 bottom-6 text-muted">
            <Link2 />
          </span>
        )}
        <div className="absolute right-6 bottom-6 text-muted">
          {/* {<p>tags:{JSON.stringify(tags)}</p>} */}
          {tags?.map((tag) => (
            <Badge
              key={tag}
              className="mr-2 text-xs bg-accent text-muted-foreground rounded-xl">
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
