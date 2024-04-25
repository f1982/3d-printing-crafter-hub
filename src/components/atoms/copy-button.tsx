'use client'

import { Button, ButtonProps } from '../ui/button'
import { copyToClipboard } from '@/utils/utils'
import React from 'react'

interface CopyButtonProps extends ButtonProps {
  content: string
  label?: string
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  content,
  label = 'Copy',
  ...reset
}) => {
  const [copied, setCopied] = React.useState(false)

  const copyTo = () => {
    copyToClipboard(content)

    setCopied(true)
    setTimeout(() => setCopied(false), 800)
  }

  return (
    <Button
      title={`Copy ${content} to your clipboard`}
      className={` ${copied ? 'animate-pulse' : ''}`}
      onClick={copyTo}
      {...reset}>
      {copied ? (
        <b>Copied!</b>
      ) : (
        <span>{reset.children ? reset.children : label}</span>
      )}
    </Button>
  )
}
