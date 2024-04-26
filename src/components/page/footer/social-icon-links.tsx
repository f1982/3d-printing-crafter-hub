import { MenuItemData } from '../header/menu-data'
import { WithClassName } from '@/types/types'
import Link from 'next/link'

function SocialIconLinks({
  data,
  className,
}: WithClassName & { data: MenuItemData[] }) {
  return (
    <div className="flex flex-row gap-6">
      {data.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          title={item.title}
          className="text-muted-foreground transition-all hover:text-foreground">
          <span className="fill-primary stroke-primary">{item.icon}</span>
        </Link>
      ))}
    </div>
  )
}

export default SocialIconLinks
