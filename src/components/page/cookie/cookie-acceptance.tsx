'use client'

import CookieAcceptancePanel from './cookie-acceptance-panel'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const acceptCookieKey = 'user-accepted-cookies'

export default function CookieAcceptance() {
  const [accepted, setAccepted] = useLocalStorage(acceptCookieKey, false)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    setOpen(!accepted)
  }, [accepted])

  return (
    <>
      {open && (
        <CookieAcceptancePanel
          handleAccept={(accepted: boolean) => {
            setAccepted(accepted)
            setOpen(false)
          }}
        />
      )}
    </>
  )
}
