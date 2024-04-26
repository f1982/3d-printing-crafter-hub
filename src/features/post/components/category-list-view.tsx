import { getCategories } from '../post-data'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

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
                <Badge
                  className="p-3 rounded-none bg-accent"
                  variant={'outline'}>
                  {c.name}
                </Badge>
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

  return (
    <div className="flex flex-col gap-9 max-w-[10rem]">
      <CategoryListView data={categories} />
    </div>
  )
}
