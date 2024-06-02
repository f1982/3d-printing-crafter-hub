import { getProcessedPosts } from '../post-actions'
import { getTagsByCategory } from '../tag-actions'
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

  let tags: any[] = []
  if (category) {
    const ot = await getTagsByCategory(category)
    tags = ot.map((t) => ({ title: t.title, url: '' }))
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
