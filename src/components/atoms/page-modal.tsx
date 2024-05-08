'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import type { FC, ReactNode } from 'react'

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
      <DialogContent className="sm:max-w-[720px] max-h-screen px-3 sm:px-9 py-12">
        <div className="h-full overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
