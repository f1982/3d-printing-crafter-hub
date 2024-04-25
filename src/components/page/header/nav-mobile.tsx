'use client'

import DarkModeToggle from './dark-mode-toggle'
import { NavItems } from './nav-menu'
import { Button } from '@/components/ui/button'
import { navMenuData } from '@/config/menu-setting'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

const MobileNav = ({
  handleClose,
  className,
}: {
  handleClose: () => void
  className?: string
}) => {
  return (
    <nav
      data-test="mobileNavMenu"
      className={clsx(
        'lg:hidden absolute top-0 right-0 w-full z-30 bg-white dark:bg-slate-800',
        'transition-all duration-800',
        className,
      )}>
      <div className="shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={handleClose}>
          <CrossCircledIcon className="w-9 h-9" />
        </Button>
        <ul
          className={clsx(
            'mt-12 flex-col items-end justify-end',
            '[&>a]:p-3 [&>a]:py-6',
            '[&>a]:border-b [&>a]:border-border [&>a]:dark:border-slate-500 ',
          )}>
          <NavItems itemData={navMenuData} handleClick={handleClose} />
        </ul>
        <div className="px-3 py-6 text-right">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default MobileNav
