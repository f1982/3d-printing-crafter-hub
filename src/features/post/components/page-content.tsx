import { getProcessedPosts, getTagsByCategorySlug } from '../post-data'
import PostCardListView from './post-card-list-view'
import Tags from './post-tags'

async function PageContent({
  category,
  tag,
}: {
  category?: string
  tag?: string
}) {
  let posts: any[] | undefined = undefined

  posts = await getProcessedPosts(category, tag)

  // let tags: { name: string; url: string }[] | undefined = undefined
  let tags: any[] = []
  if (category) {
    const ot = await getTagsByCategorySlug(category)
    console.log('ot', ot)
    tags = ot.map((t) => ({ title: t.title, url: '' }))
    console.log('tags', tags)
  }

  if (!posts) {
    return null
  }

  return (
    <>
      <div>
        <PostCardListView posts={posts} />

        {tags && <Tags data={tags} />}
      </div>
    </>
  )
}

export default PageContent
