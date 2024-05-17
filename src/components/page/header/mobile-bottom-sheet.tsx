'use client'

import React from 'react'

import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const MobileBottomMenu = ({
  left,
  right,
  content,
}: {
  left?: React.ReactNode
  right?: React.ReactNode
  content?: React.ReactNode
}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="bottom">
          <div className="flex flex-col gap-6">
            <div className="mt-9 flex flex-row justify-between">
              {left}
              {right}
            </div>
            {content}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
