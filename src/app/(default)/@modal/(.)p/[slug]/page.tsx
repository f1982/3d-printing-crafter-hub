import Modal from '@/components/atoms/page-modal'
import PostDetail from '@/features/post/components/post-detail'
import { getPost2 } from '@/features/post/post-data'

interface PhotoModalPageProps {
  params: {
    slug: string
  }
}

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  let post = await getPost2(params.slug)
  console.log('modal post', post)
  if (!post) {
    return null
  }

  return (
    <Modal>
      {/* <PostModal> */}
      <PostDetail post={post} />
      {/* </PostModal> */}
    </Modal>
  )
}

export default PhotoModalPage
