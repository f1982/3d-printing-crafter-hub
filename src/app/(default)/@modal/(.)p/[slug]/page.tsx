import { Suspense } from 'react'

import { notFound } from 'next/navigation'

import Modal from '@/components/atoms/page-modal'
import Spiner from '@/components/atoms/spinner'

import PostDetail from '@/features/post/components/post-detail'
import { getProcessedPost } from '@/features/post/post-data'

interface PopProps {
  params: {
    slug: string
  }
}

async function PostDetailWrapper({ slug }: { slug: string }) {
  let post = await getProcessedPost(slug)
  if (!post) {
    notFound()
  }
  return <PostDetail post={post} />
}

const PostModalPage = async ({ params }: PopProps) => {
  return (
    <Modal>
      <Suspense fallback={<Spiner />}>
        <PostDetailWrapper slug={params.slug} />
      </Suspense>
    </Modal>
  )
}

export default PostModalPage
