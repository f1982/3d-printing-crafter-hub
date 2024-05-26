'use client'

import clsx from 'clsx'
import { Cookie } from 'lucide-react'

import { Button } from '../../ui/button'

interface CookieAcceptanceProps {
  handleAccept: (flag: boolean) => void
}

export default function CookieAcceptancePanel({
  handleAccept,
}: CookieAcceptanceProps) {
  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 w-full md:bottom-3 md:left-3 md:w-96',
        'flex flex-col items-center justify-center',
        'gap-3',
        'px-4 py-3 md:px-9 md:py-9 ',
        'rounded-xl bg-white shadow-lg ring-1 ring-slate-200  dark:bg-gray-800',
      )}>
      <div role="banner">
        <Cookie className="h-16 w-16 fill-orange-400 stroke-orange-900" />
      </div>
      <div className="prose">
        <h3
          role="main"
          className="text-center text-3xl font-semibold leading-7 text-gray-800 dark:text-white lg:text-4xl lg:leading-9">
          We use cookies
        </h3>
        <p className="text-center text-base leading-7 text-gray-800 dark:text-white sm:w-80">
          Please, accept these sweeties to continue enjoying our site!
        </p>
      </div>

      <Button size={'lg'} onClick={() => handleAccept(true)}>
        Mmm... Sweet!
      </Button>

      <Button
        variant={'ghost'}
        className="w-auto"
        size={'lg'}
        onClick={() => handleAccept(false)}>
        Nope.. I am on a diet
      </Button>
    </div>
  )
}
