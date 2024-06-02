import { Suspense } from 'react'

import { notFound } from 'next/navigation'

import Modal from '@/components/atoms/page-modal'
import Spiner from '@/components/atoms/spinner'

import PostContentView from '@/features/post/components/post-content-view'
import { getProcessedPost } from '@/features/post/post-actions'

interface PopProps {
  params: {
    slug: string
  }
}

async function PostContentViewWrapper({ slug }: { slug: string }) {
  let post = await getProcessedPost(slug)
  if (!post) {
    notFound()
  }
  return (
    <PostContentView
      thumbnail={post.thumbnail || ''}
      content={post.content || ''}
      title={post.title}
      sharableUrl=""
    />
  )
}

const PostModalPage = async ({ params }: PopProps) => {
  return (
    <Modal>
      <Suspense fallback={<Spiner />}>
        <PostContentViewWrapper slug={params.slug} />
      </Suspense>
    </Modal>
  )
}

export default PostModalPage
