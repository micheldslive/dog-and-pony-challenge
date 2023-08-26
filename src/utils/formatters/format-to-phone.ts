export const formatToPhone = (value: string): string =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{1,2})/, '($1')
    .replace(/(\(\d{3})(\d{1,4})/, '$1) $2')
    .replace(/( \d{3})(\d{1,4})/, '$1-$2')
