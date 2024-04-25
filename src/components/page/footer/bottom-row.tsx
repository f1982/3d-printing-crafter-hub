import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export function BottomRow() {
  const currentYear = useState(new Date().getFullYear())[0]
  return (
    <div
      className={clsx(
        'container',
        'flex flex-col items-center justify-between md:flex-row ',
        'py-6',
        'bg-blue mx-auto border-t-[1px] border-t-gray-200 dark:border-t-gray-800',
      )}>
      <span className="text-sm text-gray-900 dark:text-gray-300">
        Copyright @{currentYear} emojiu.cc
      </span>
      <div className="space-x-6 text-sm font-medium">
        <Link href="/terms-and-conditions" title="Terms and Conditions">
          Terms and Conditions
        </Link>
        <Link href="/privacy" title="Privacy">
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
