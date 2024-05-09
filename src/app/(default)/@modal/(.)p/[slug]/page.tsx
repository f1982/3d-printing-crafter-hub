import Modal from '@/components/atoms/page-modal'
import Spiner from '@/components/atoms/spinner'
import PostDetail from '@/features/post/components/post-detail'
import { getPost2 } from '@/features/post/post-data'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface PopProps {
  params: {
    slug: string
  }
}

async function PostDetailWrapper({ slug }: { slug: string }) {
  let post = await getPost2(slug)
  console.log('modal post', post)
  await new Promise((r) => setTimeout(r, 1000))
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
