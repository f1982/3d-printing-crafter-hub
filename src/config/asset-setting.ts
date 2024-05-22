const staticRootUrl =
  'https://raw.githubusercontent.com/f1982/planet-of-images/main/emojiu'

export const staticUrl = (path: string) => {
  return `${staticRootUrl}/${path}`
}

export const imageUrl = (path: string) => {
  return staticUrl(`images/${path}`)
}
