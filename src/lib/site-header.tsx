import DarkModeToggle from '@/components/atoms/darkmode-switcher'
import SocialIconLinks from '@/components/page/footer/social-icon-links'
import Header from '@/components/page/header/header'

import GroupsView from '@/features/post/components/groups-view'

import { socialLinks } from '@/config/link-setting'
import { siteSettings } from '@/config/setting'

export default function SiteHeader() {
  return (
    <>
      <Header
        className="w-full max-w-none"
        left={
          <span className="text-lg font-semibold">{siteSettings.slogan}</span>
        }
        content={<GroupsView />}
        right={
          <div className="flex flex-row items-center justify-center gap-6">
            <DarkModeToggle />
            <SocialIconLinks data={socialLinks}></SocialIconLinks>
            {/* <LocaleSwitcher /> */}
          </div>
        }
      />
    </>
  )
}
