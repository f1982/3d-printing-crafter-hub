import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { getCategories } from '../post-data'

export default function CategoryListView({
  data,
}: {
  data: { name: string; url: string }[]
}) {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {data.map((c) => {
          return (
            <div key={c.name}>
              <Link href={c.url}>
                <Button variant="default" className="rounded-none p-3">
                  {c.name.toUpperCase()}
                </Button>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function CategoryList() {
  let categories = (await getCategories()).map((c) => ({
    name: c.title,
    url: `/c/${c.slug}`,
  }))

  categories.unshift({ name: 'All', url: '/' })

  return <CategoryListView data={categories} />
}
