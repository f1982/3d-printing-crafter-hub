import { getCategory, getPosts, getTag } from '../post-data'
import PostListView from './post-list-view'
import Tags from './post-tags'

async function PageContent({
  category,
  tag,
}: {
  category?: string
  tag?: string
}) {
  let posts: any[] | undefined = undefined
  let tags: { name: string; url: string }[] | undefined = undefined

  if (category) {
    const data = await getCategory(category)
    posts = data?.posts
    tags = data?.tags.map((t) => ({ name: t.name, url: `/t/${t.slug}` }))
  }
  if (tag) {
    posts = (await getTag(tag))?.posts
  }
  if (!category && !tag) {
    posts = await getPosts()
  }

  posts = posts?.map((p) => ({
    ...p,
    url: p.description ? `/p/${p.slug}` : p.url,
    thumbnail: p.thumbnail.startsWith('https://')
      ? p.thumbnail
      : '/images/' + p.thumbnail,
    tags: p.tags?.map((t: any) => t.name),
  }))
  // console.log('posts', posts)

  if (!posts) {
    return null
  }

  return (
    <>
      <div>
        {!!tags?.length && (
          <div className="w-full mb-6 hidden lg:block">
            <Tags data={tags} />
          </div>
        )}
        <PostListView posts={posts} />
      </div>
    </>
  )
}

export default PageContent
