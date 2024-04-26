import { siteMetadata } from '@/config/setting'
import PageContent from '@/features/post/components/page-content'

export const metadata = { ...siteMetadata }

export default async function Page() {
  return (
    <>
      <PageContent />
    </>
  )
}
