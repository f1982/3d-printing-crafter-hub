import DarkModeToggle from '@/components/atoms/darkmode-switcher'
import SocialIconLinks from '@/components/page/footer/social-icon-links'
import Header from '@/components/page/header/header'
import { socialLinks } from '@/config/link-setting'
import { CategoryList } from '@/features/post/components/category-list-view'

export default function SiteHeader() {
  return (
    <>
      <Header
        left={<>Test</>}
        content={<CategoryList />}
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
