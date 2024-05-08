import Prose from '@/components/atoms/prose'
import { Button } from '@/components/ui/button'
import { NextShare } from '@/lib/sns-share'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function PostDetail({ post }: { post: any }) {
  return (
    <>
      {post?.thumbnail && (
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            className="w-full blur-md"
            src={post?.thumbnail}
            width={480}
            height={240}
            alt=""></Image>
          <div
            className={clsx(
              'mb-3 absolute top-0 left-0 w-full h-full ',
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
      <Prose>
        {post.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        )}
      </Prose>
      {/* <div>{JSON.stringify(post)}</div> */}
      {post.url && (
        <Link href={post.url} passHref>
          <Button variant={'outline'}>Website</Button>
        </Link>
      )}
      <div className="flex flex-row justify-center">
        <NextShare title={post.title} url=""></NextShare>
      </div>
    </>
  )
}
