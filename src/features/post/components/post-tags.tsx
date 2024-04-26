import { Badge } from '@/components/ui/badge'
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
            <Link href={t.url}>
              <Badge
                className="bg-muted text-muted-foreground text-sm font-thin shadow-none hover:bg-secondary"
                key={t.name}>
                {t.name}
              </Badge>
            </Link>
          )
        })}
      </div>
    </>
  )
}
