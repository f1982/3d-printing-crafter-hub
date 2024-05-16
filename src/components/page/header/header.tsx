'use client'

import clsx from 'clsx'
import React from 'react'

import { MobileBottomMenu } from './mobile-bottom-sheet'

type HeaderProps = {
  left?: React.ReactNode
  right?: React.ReactNode
  content: React.ReactNode
  className?: string
}

const Header = ({ left, right, content, className }: HeaderProps) => {
  return (
    <header
      className={clsx('container', 'border-b-0 border-b-border', className)}>
      <div className="flex h-12 w-full items-center justify-between">
        {left}

        <div className="hidden lg:flex">{right}</div>

        {/* Menu button only show in small screen */}
        {/* <MobileNavPopover left={left} right={right} data={data} /> */}
        <MobileBottomMenu content={content} />
      </div>
    </header>
  )
}

export default Header
