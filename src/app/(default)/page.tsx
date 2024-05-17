import PageContent from '@/features/post/components/page-content'

import { siteMetadata } from '@/config/setting'

export const metadata = { ...siteMetadata }

export default async function Page() {
  return (
    <>
      <PageContent />
    </>
  )
}
