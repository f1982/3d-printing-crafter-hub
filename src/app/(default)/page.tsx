import { Suspense } from 'react'

import Spiner from '@/components/atoms/spinner'

import PageContent from '@/features/post/components/page-content'
import { getVote, updateVote } from '@/features/vote/vote-action'

import { siteMetadata } from '@/config/setting'

export const metadata = { ...siteMetadata }

export default async function Page() {
  // const group = await getCategories()
  // const group = await getGroups()
  const voteValue = await getVote(36)
  console.log('voteValue', voteValue)
  await updateVote('1234', 36, 1)

  // console.log('group', group)
  return (
    <>
      <Suspense fallback={<Spiner />}>
        <PageContent />
      </Suspense>
    </>
  )
}
