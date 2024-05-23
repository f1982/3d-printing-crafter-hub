import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { getGroups } from '../post-data'

export default async function GroupsView() {
  let groups = await getGroups()

  return (
    <>
      <div className="flex flex-col gap-9">
        {groups.map((g) => {
          return (
            <div key={g.name} className="flex flex-col gap-3">
              <div>
                <span className="bg-accent text-xl font-bold">{g.name}</span>
              </div>
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
      </div>
    </>
  )
}
