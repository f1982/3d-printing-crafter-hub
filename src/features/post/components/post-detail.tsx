import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { NextShare } from '@/lib/sns-share'

import Prose from '@/components/atoms/prose'
import { Button } from '@/components/ui/button'

export default function PostDetail({ post }: { post: any }) {
  return (
    <>
      {post?.thumbnail && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            className="w-full blur-md"
            src={post?.thumbnail}
            width={480}
            height={240}
            alt=""></Image>
          <div
            className={clsx(
              'absolute left-0 top-0 mb-3 h-full w-full ',
              'bg-primary/40',
              'pointer-events-none',
            )}></div>
          <h1
            className="absolute bottom-12 px-6 text-3xl font-bold text-white"
            style={{
              textShadow: '0px 1px 0px rgba(0, 0, 0, 0.6)',
            }}>
            {post?.title}
          </h1>
        </div>
      )}
      <div className="mx-auto p-4 md:p-9">
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Prose>

        {post.url && (
          <Link href={post.url} passHref>
            <Button variant={'outline'}>Website</Button>
          </Link>
        )}
      </div>
      <div className="flex flex-row justify-center">
        <NextShare title={post.title} url=""></NextShare>
      </div>
    </>
  )
}
