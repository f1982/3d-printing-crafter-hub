'use client'

import { NavItemData } from '@/types/types'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavItems({
  itemData,
  handleClick,
}: {
  itemData: NavItemData[]
  handleClick?: () => void
}) {
  const pathname = usePathname()
  return (
    <>
      {itemData.map((item) => {
        return (
          <Link
            key={item.link}
            onClickCapture={() => {
              handleClick?.()
            }}
            className={clsx(
              `flex items-center text-sm`,
              pathname?.startsWith(item.link)
                ? 'font-extrabold'
                : 'font-normal text-popover-foreground',
            )}
            href={item.link}>
            <span className="hover:text-primary/90">{item.title}</span>
          </Link>
        )
      })}
    </>
  )
}
