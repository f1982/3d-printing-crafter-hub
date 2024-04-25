// import DarkModeToggle from '@/components/molecule/dark-mode-toggle'
import Header from '@/components/page/header/header'
import { navMenuData } from '@/config/link-setting'
import SiteLogo from '@/lib/site-logo'
import { SwitchCamera } from 'lucide-react'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <>
      <Header
        left={
          <Link
            data-test="leftLink"
            href="/"
            title="back to emojiu.cc homepage">
            <SiteLogo />
          </Link>
        }
        data={navMenuData}
        right={
          <div className="flex flex-row gap-3">
            <SwitchCamera />
            {/* <LocaleSwitcher /> */}
          </div>
        }
      />
    </>
  )
}
