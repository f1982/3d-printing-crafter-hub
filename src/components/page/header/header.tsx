'use client'

import DarkModeToggle from './dark-mode-toggle'
import { NavItems } from './nav-menu'
import MobileNav from './nav-mobile'
import LogoImage from '@/assets/images/logo-text.png'
import { navMenuData } from '@/config/menu-setting'
import { RowsIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="border-b border-border bg-popover">
      <div className={`container mx-auto h-16 md:h-24 flex items-center`}>
        <div className="w-full flex items-center justify-between">
          <Link
            data-test="logoLink"
            href="/"
            title="back to emojiu.cc homepage">
            <Image
              src={LogoImage}
              width={152}
              title="Website for Finding and Copying Emojis"
              alt="Emoji you, Find and Copy Emojis Easily"
              placeholder="blur"
            />
          </Link>

          {/* Menu, only show on bigger screen */}
          <ul
            data-test="desktopNavMenu"
            className="items-center space-x-9 hidden lg:flex [&>li]:font-normal">
            <NavItems itemData={navMenuData} />
          </ul>

          <DarkModeToggle />
          <button
            className="lg:hidden p-3"
            title="Toggle menu"
            onClick={toggleMenu}>
            <RowsIcon className="w-6 h-6" />
          </button>
        </div>

        <MobileNav
          className={clsx(isOpen ? 'visible opacity-100' : 'hidden opacity-0')}
          handleClose={() => {
            setIsOpen(false)
          }}
        />
        {/* )} */}
      </div>
    </header>
  )
}

export default Header
