import { getProcessedPosts, getTagsByCategorySlug } from '../post-data'
import PostCardListView from './post-card-list-view'

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
  let tags: string[] | undefined = undefined
  if (category) {
    const ot = await getTagsByCategorySlug(category)
    console.log('ot', ot)
    let tags = ot.map((t) => t.name)
    console.log('tags', tags)
  }

  if (!posts) {
    return null
  }

  return (
    <>
      <div>
        <PostCardListView posts={posts} />

        {tags && <Tags tags={tags} />}
      </div>
    </>
  )
}

export default PageContent
