import { Prisma, Emoji as PrismaEmoji } from '@prisma/client'

export type WithClassName = {
  className?: string
}

export type Emoji = PrismaEmoji &
  Partial<
    Prisma.EmojiGetPayload<{
      include: { emojiCategory: true; relevantEmojis: true }
    }>
  >

export type IconConfigMeta = {
  contentType: string
  size: { width: number; height: number }
  id: string
}

export type CategoryItem = { category: string; emojis: EmojiData[] }

export type EmojiData = {
  emoji: string
  name: string
  slug?: string
  group: string
  file?: string
  keywords?: string[]
}

export type NavItemData = {
  title: string
  link: string
}

export type EmojiEssential = Pick<
  Emoji,
  | 'name'
  | 'slug'
  | 'emoji'
  | 'category'
  | 'keywords'
  | 'skinToneSupport'
  | 'emojiCategory'
>
