import { MenuItemData } from '../header/menu-data'
import { WithCN } from '@/types/types'
import Link from 'next/link'

function SocialIconLinks({
  data,
  className,
}: WithCN & { data: MenuItemData[] }) {
  return (
    <div className="flex flex-row gap-6">
      {data.map((item) => (
        <Link
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
