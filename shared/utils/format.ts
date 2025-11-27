export function formatPhone(phone: number | string) {
  const stringifyPhone = phone.toString()

  if (stringifyPhone.length < 10) {
    return phone
  }
  const match = stringifyPhone.match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  }

  return phone
}
