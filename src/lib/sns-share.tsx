'use client'

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share'

const iconSize = 32

type ShareProps = {
  url?: string
  quote?: string
  tags?: string
  title?: string
}

export function NextShare({
  url = window.location.href,
  quote,
  title,
  tags = '',
}: ShareProps) {
  return (
    <div className="flex flex-row gap-3">
      <TwitterShareButton url={url} title={quote}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={quote} hashtag={tags}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <EmailShareButton url={url} subject={title} body={quote}>
        <EmailIcon size={iconSize} round />
      </EmailShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
    </div>
  )
}

export function SocialShareBar(props: ShareProps) {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <span className="flex-1">Share with your friend</span>
      <NextShare {...props} />
    </div>
  )
}
