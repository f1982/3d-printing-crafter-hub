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
        <div className="w-full h-48 relative overflow-hidden">
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
      <div className="mx-auto p-4 md:p-9">
        {/* <Prose>
          {post.contentHtml && (
            <div
              className="whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
          )}
        </Prose> */}
        <Prose>
          <div
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Prose>

        {/* <div>{JSON.stringify(post)}</div> */}
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
