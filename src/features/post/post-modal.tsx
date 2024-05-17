'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

export function PostModal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-xl rounded-lg bg-background p-6 shadow-lg">
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
