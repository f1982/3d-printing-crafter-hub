'use client'

import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent } from '@/components/ui/dialog'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter()

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back()
    }
  }
  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent className="h-full max-h-screen max-w-5xl px-0 py-12 md:h-[90%] md:max-w-[720px]">
        <div className="h-full overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
