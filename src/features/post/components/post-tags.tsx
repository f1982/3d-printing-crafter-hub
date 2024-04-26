import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Tags({
  data,
}: {
  data: { name: string; url: string }[]
}) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data.map((t) => {
          return (
            <Link key={t.name} href={t.url}>
              <Button
                variant="secondary"
                className="rounded-xl text-sm font-normal p-3 h-6">
                <span>{t.name}</span>
              </Button>
            </Link>
          )
        })}
      </div>
    </>
  )
}
