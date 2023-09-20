export const extractDateFromDateTime = (date: string) => {
  return new Date(date).toLocaleDateString('ru')
}

export const extractTimeFromDateTime = (date: string) => {
  return new Date(date).toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
}
