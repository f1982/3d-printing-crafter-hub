import { z } from 'zod'

import { LangOptions, askGptWithCache } from './gpt'

export const validator = z.object({
  titles: z.array(z.string().min(3).max(200)).min(2),
})

export function getPrompt(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh',
): string {
  return `
Generate ${count} fun YouTube video titles.
- The title is required to be unique and attractive, straightforward and simple yet specific.
- The title must be longer than 15 words
- The title contains popular SEO keywords and is motivating or questioning. 
- You can use inductive sentences appropriately and can include numbers.
The video is about
 
"""
${topic}
"""

Please provide data output in "JSON" data format.
  
{
  "titles": ["",""]
}
`
}

export async function generateVideoTitles(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh',
) {
  const prompt = getPrompt(topic, count, lang)
  // console.log('prompt', prompt)
  let result = await askGptWithCache({ prompt, validator, jsonFormat: true })
  return result.titles
}
