import { getCategory, getPosts, getTag } from '../post-data'
import { CategoryList } from './category-list-view'
import PostListView from './post-list-view'
import Tags from './post-tags'
import { Post, Tag } from '@prisma/client'

export default async function PageContent({
  category,
  tag,
}: {
  category?: string
  tag?: string
}) {
  let posts: Post[] | undefined = undefined
  let tags: Tag[] | undefined = undefined

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

  posts = posts.map((p) => ({
    ...p,
    url: p.url ? p.url : `/p/${p.slug}`,
    tags: p.tags?.map((t) => t.name),
  }))

  return (
    <div className="mx-6 mb-36 flex flex-col gap-9 md:flex-row">
      <div className="hidden lg:flex  flex-col gap-9 max-w-[10rem] ">
        <CategoryList />
      </div>
      <div className="flex-1">
        {!!tags?.length && (
          <div className="w-full mb-9 hidden lg:block">
            <Tags data={tags} />
          </div>
        )}
        <PostListView posts={posts} />
      </div>
    </div>
  )
}
