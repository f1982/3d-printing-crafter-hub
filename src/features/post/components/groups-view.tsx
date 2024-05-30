import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { getGroups } from '../post-data'

export default async function GroupsView() {
  const groups = await getGroups()

  return (
    <>
      <div className="flex flex-col gap-9">
        {groups.map((g) => {
          return (
            <div key={g.title} className="flex flex-col gap-3">
              <div>
                <span className="bg-secondary text-xl font-bold text-secondary-foreground">
                  {g.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {g.categories.map((c) => {
                  return (
                    <Link key={c.title} href={`/c/${c.slug}`}>
                      <Button variant="default" className="rounded-none p-3">
                        {c.title.toUpperCase()}
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
