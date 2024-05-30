import { getGroups } from '@/features/post/post-data'

import { siteMetadata } from '@/config/setting'

export const metadata = { ...siteMetadata }

export default async function Page() {
  // const group = await getCategories()
  const group = await getGroups()
  console.log('group', group)
  return (
    <>
      {/* <Suspense fallback={<Spiner />}>
        <PageContent />
      </Suspense> */}
    </>
  )
}
