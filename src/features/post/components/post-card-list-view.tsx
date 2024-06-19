import CardGrid from '@/components/atoms/card-grid'

import PostCardView from './post-card-view'

export default function PostCardListView({ posts }: { posts: any[] }) {
  return (
    <CardGrid>
      {posts.map((p) => {
        return (
          <div key={p.title}>
            <PostCardView
              title={p.title}
              coverImage={p.thumbnail!}
              date={p.updatedAt.toUTCString()}
              url={p.url!}
              description={p.description!}
              tags={p.tags ?? ['']}
            />
          </div>
        )
      })}
    </CardGrid>
  )
}
