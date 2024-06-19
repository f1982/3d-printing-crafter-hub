import { siteMetadata } from '@/config/setting'

import PostForm from './_comp/post-form'

export const metadata = { ...siteMetadata, title: 'Create Post' }
export default function Page() {
  return (
    <div>
      <PostForm />
    </div>
  )
}
