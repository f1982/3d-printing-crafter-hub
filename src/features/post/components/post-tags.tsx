import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Tags({
  data,
}: {
  data: { title: string; url: string }[]
}) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data.map((t) => {
          return (
            <Link key={t.title} href={t.url}>
              <Button
                variant="secondary"
                className="h-6 rounded-xl p-3 text-sm font-normal">
                <span>{t.title}</span>
              </Button>
            </Link>
          )
        })}
      </div>
    </>
  )
}
