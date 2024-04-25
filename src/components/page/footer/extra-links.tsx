import { NavItems } from '@/components/page/header/nav-menu'
import { navMenuData } from '@/config/menu-setting'
import { socialMediaUrls } from '@/config/setting'
import Link from 'next/link'

export const ExtraLinks = () => {
  return (
    <div className="flex flex-row gap-6">
      <div className="w-full flex-col">
        <span className="mb-3 font-semibold leading-loose">Content</span>
        <ul>
          <NavItems itemData={navMenuData} />
        </ul>
      </div>
      <div className="w-full flex-col">
        <span className="mb-3 font-semibold leading-loose">Social</span>
        <ul>
          <li>
            <Link
              href={socialMediaUrls.twitter}
              title="Emoji You Official Twitter">
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href={socialMediaUrls.youtube}
              title="@emojiyou YouTube Channel">
              YouTube
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
