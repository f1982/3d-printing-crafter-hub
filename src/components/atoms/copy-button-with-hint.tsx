'use client'

import React from 'react'

import { WithClassName } from '@/types/types'
import clsx from 'clsx'

import { copyToClipboard } from '../../utils/utils'

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
        className={clsx('absolute bottom-0 left-0 right-0 top-0', className)}
        onClick={handleCopy}></button>
      {copied && <span className="emoji-copy-hint">Copied!</span>}
    </>
  )
}
