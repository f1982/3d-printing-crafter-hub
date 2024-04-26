// import DarkModeToggle from '@/components/molecule/dark-mode-toggle'
import DarkModeToggle from '@/components/atoms/darkmode-switcher'
import SocialIconLinks from '@/components/page/footer/social-icon-links'
import Header from '@/components/page/header/header'
import { socialLinks } from '@/config/link-setting'
import { CategoryList } from '@/features/post/components/category-list-view'
import SiteLogo from '@/lib/site-logo'
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
        content={<CategoryList />}
        right={
          <div className="flex flex-row gap-6 justify-center items-center">
            <DarkModeToggle />
            <SocialIconLinks data={socialLinks}></SocialIconLinks>
            {/* <LocaleSwitcher /> */}
          </div>
        }
      />
    </>
  )
}
