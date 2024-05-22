import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { getCategories, getGroups } from '../post-data'

export async function GroupListView() {
  let groups = await getGroups()

  return (
    <>
      {groups.map((g) => {
        return (
          <div key={g.name} className="flex flex-col gap-3">
            <div className="bg-accent text-xl font-bold">{g.name}</div>
            <div className="flex flex-wrap gap-3">
              {g.categories.map((c) => {
                return (
                  <Link key={c.name} href={`/c/${c.slug}`}>
                    <Button variant="default" className="rounded-none p-3">
                      {c.name.toUpperCase()}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
export default function CategoryListView({
  data,
}: {
  data: { name: string; url: string }[]
}) {
  return (
    <>
      <div className="flex flex-wrap gap-3 ">
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
    name: c.name,
    url: `/c/${c.slug}`,
  }))

  categories.unshift({ name: 'All', url: '/' })

  return <CategoryListView data={categories} />
}
