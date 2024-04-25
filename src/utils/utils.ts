/**
 * Copy a string to clipboard
 * @param  {string} string         The string to be copied to clipboard
 * @return {boolean}               returns a boolean correspondent to the success of the copy operation.
 * @see https://stackoverflow.com/a/53951634/938822
 */
export function copyToClipboard(string: string): boolean {
  let textarea: HTMLTextAreaElement | undefined
  let result: boolean | null = null

  try {
    textarea = document.createElement('textarea')
    textarea.setAttribute('readonly', 'true')
    textarea.setAttribute('contenteditable', 'true')
    textarea.style.position = 'fixed' // prevent scroll from jumping to the bottom when focus is set.
    textarea.value = string

    document.body.appendChild(textarea)

    if (textarea) {
      textarea.focus()
      textarea.select()

      const range = document.createRange()
      range.selectNodeContents(textarea)

      const sel = window.getSelection()
      if (sel) {
        sel.removeAllRanges()
        sel.addRange(range)
      }

      if (textarea.setSelectionRange) {
        textarea.setSelectionRange(0, textarea.value.length)
      }

      result = document.execCommand('copy')
    }
  } catch (err) {
    console.error(err)
  } finally {
    if (textarea && textarea.parentNode) {
      textarea.parentNode.removeChild(textarea)
    }
  }

  // manual copy fallback using prompt
  if (!result) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const copyHotkey = isMac ? '⌘C' : 'CTRL+C'
    result = window.prompt(`Press ${copyHotkey}`, string) !== null
  }
  return !!result
}

export const getFileNameBackUp = (cn: string) => {
  let cate = cn.toLowerCase().replace(/&/g, 'and').replace(/\s/g, '-')
  return cate
}

export const getFileName = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/,/g, '')
    .replace(/’/g, '')
    .replace(/:/g, '')
    .replace(/å/g, 'a')
    .replace(/ã/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ñ/g, 'n')
    .replace(/ç/g, 'c')
    .replace(/ô/g, 'o')
    .replace(/“/g, '')
    .replace(/”/g, '')
    .replace(/#/g, 'pound-sign')
    .replace(/\s/g, '-')

export function formatSlug(slug: string): string {
  return slug.toLowerCase().replace(/_/g, '-')
}
