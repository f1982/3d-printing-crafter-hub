import PostItemView from './blog-post-item'
import CardGrid from '@/components/atoms/card-grid'

export default function PostListView({ posts }: { posts: any[] }) {
  return (
    <CardGrid>
      {posts.map((p) => {
        return (
          <div key={p.title}>
            <PostItemView
              title={p.title}
              coverImage={p.thumbnail!}
              date={p.updatedAt.toUTCString()}
              url={p.url!}
              tags={p.tags ?? ['']}
            />
            {/* {p.title}
      <Image src={p?.thumbnail} width={480} height={240} alt=""></Image> */}
            {/* <div>
      Tags:{' '}
      {p.tags.map((t) => {
        return <div key={t.id}>{t.name} </div>
      })}
    </div> */}
          </div>
        )
      })}
    </CardGrid>
  )
}
