export const formatNumber = (num: string, numberType?: string) => {
  // Check if the number is a decimal
  const isDecimal = parseFloat(num) % 1 !== 0
  const [intValue, decimalValue] = num.split(',')

  // Convert the number to a string and split it into an array
  let intArray = (intValue ?? '').toString().split('')

  // Reverse the array for easier manipulation
  intArray = intArray.reverse()

  // Insert a '.' every three digits for whole numbers

  for (let i = 3; i < intArray.length; i += 4) {
    intArray.splice(i, 0, '.')
  }

  // Reverse the array back and join it into a string
  let formattedNum = intArray.reverse().join('')
  isDecimal && (formattedNum += ',' + decimalValue)

  // Append the numberType at the end
  if (numberType) formattedNum += ' ' + numberType

  return formattedNum
}

export const removeFormatting = (formattedNum: string): string => {
  // Remove any non-digit characters from the string
  const numWithoutFormatting = formattedNum.replace(/[^\d]/g, '')

  return numWithoutFormatting
}
/**
 * Parse a localized number to a float.
 * @param {string} stringNumber - the localized number
 * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
 */
export const parseLocaleNumber = (
  stringNumber: string,
  locale: string = 'de'
): number => {
  if (locale === 'is') locale = 'de' // The Icelandic 'is' is broken in Chrome, so we use the German one, and it has the same number formatting.

  var thousandSeparator = Intl.NumberFormat(locale)
    .format(11111)
    .replace(/\p{Number}/gu, '')

  var decimalSeparator = Intl.NumberFormat(locale)
    .format(1.1)
    .replace(/\p{Number}/gu, '')

  return parseFloat(
    stringNumber
      .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
      .replace(new RegExp('\\' + decimalSeparator), '.')
  )
}

export const numberToTwoDecimals = (num: number) => {
  return Math.round(100 * num) / 100
}
