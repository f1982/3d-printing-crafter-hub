import { getCategories } from './post-data'
import Link from 'next/link'

export default function CategoryListView({
  data,
}: {
  data: { name: string; url: string }[]
}) {
  return (
    <>
      {data.map((c) => {
        return (
          <div key={c.name}>
            <Link href={c.url}>{c.name}</Link>
          </div>
        )
      })}
    </>
  )
}

export async function CategoryList() {
  const categories = (await getCategories()).map((c) => ({
    name: c.name,
    url: `/category/${c.slug}`,
  }))

  return <CategoryListView data={categories} />
}
