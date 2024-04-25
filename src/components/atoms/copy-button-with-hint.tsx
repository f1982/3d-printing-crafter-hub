'use client'

import { copyToClipboard } from '../../utils/utils'
import { WithClassName } from '@/types/types'
import clsx from 'clsx'
import React from 'react'

interface CopyButtonProps extends WithClassName {
  content: string
}

export const CopyWithHintButton = ({ content, className }: CopyButtonProps) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    copyToClipboard(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 600) // Reset after 0.6 seconds
  }

  return (
    <>
      <button
        className={clsx('absolute top-0 left-0 bottom-0 right-0', className)}
        onClick={handleCopy}></button>
      {copied && <span className="emoji-copy-hint">Copied!</span>}
    </>
  )
}
