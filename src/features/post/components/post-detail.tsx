import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { NextShare } from '@/lib/sns-share'

import Prose from '@/components/atoms/prose'
import { Button } from '@/components/ui/button'

function PostHeader({
  title,
  thumbnail,
}: {
  title: string
  thumbnail: string
}) {
  return (
    <>
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          className="w-full object-fill blur-md"
          src={thumbnail}
          width={480}
          height={240}
          alt=""></Image>
        <div
          className={clsx(
            'absolute inset-0',
            'bg-primary/50',
            'pointer-events-none',
          )}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-pretty max-w-lg text-3xl font-bold text-white">
            {title}
          </h1>
        </div>
      </div>
    </>
  )
}

export default function PostDetail({ post }: { post: any }) {
  return (
    <>
      <PostHeader title={post.title} thumbnail={post.thumbnail} />

      <div className="mx-auto p-4 md:p-9">
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Prose>

        {post.url && (
          <Link href={post.url} passHref>
            <Button variant={'outline'}>Website</Button>
          </Link>
        )}

        <div className="mt-36 flex flex-row items-center justify-center gap-6">
          <span>Share with your friend:</span>
          <NextShare title={post.title} url=""></NextShare>
        </div>
      </div>
    </>
  )
}
