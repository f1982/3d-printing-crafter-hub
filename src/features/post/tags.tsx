import { Badge } from '@/components/ui/badge'

export default function Tags({ data }: { data: string[] }) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data.map((tag: string) => {
          return <Badge key={tag}>{tag}</Badge>
        })}
      </div>
    </>
  )
}
