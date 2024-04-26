'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export function PostModal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-xl p-6 bg-background rounded-lg shadow-lg">
        <button
          onClick={() => {
            router.back()
          }}>
          Close modal
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}
