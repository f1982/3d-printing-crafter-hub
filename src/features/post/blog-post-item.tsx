import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostItemView: React.FC<any> = ({ title, coverImage, date, url }) => (
  <div className="cursor-pointer">
    <Link href={url} passHref>
      <div className="mb-3">
        <Image
          className={clsx(
            'aspect-video w-full rounded-xl object-cover',
            'ring-1 ring-muted',
          )}
          src={coverImage}
          width={600}
          height={400}
          alt={`${title} preview`}
        />
      </div>
    </Link>
    <h3 className="line-clamp-1 font-semibold">{title}</h3>
    <span className="text-xs text-muted-foreground">{date}</span>
  </div>
)

export default PostItemView
