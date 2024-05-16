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
        'fixed bottom-0 left-0 md:bottom-3 md:left-3 w-full md:w-96',
        'flex flex-col justify-center items-center',
        'gap-3',
        'py-3 px-4 md:px-9 md:py-9 ',
        'ring-1 ring-slate-200 rounded-xl shadow-lg dark:bg-gray-800  bg-white',
      )}>
      <div role="banner">
        <Cookie className="w-16 h-16 fill-orange-400 stroke-orange-900" />
      </div>
      <div className="prose">
        <h3
          role="main"
          className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800">
          We use cookies
        </h3>
        <p className="sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800">
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
