export const formatNumber = (
  num: number | string | undefined,
  numberType: string
) => {
  // Convert the number to a string and split it into an array
  let numArray = (num ?? '').toString().split('')

  // Reverse the array for easier manipulation
  numArray = numArray.reverse()

  // Insert a '.' every three digits
  for (let i = 3; i < numArray.length; i += 4) {
    numArray.splice(i, 0, '.')
  }

  // Reverse the array back and join it into a string
  let formattedNum = numArray.reverse().join('')

  // Append the numberType at the end
  formattedNum += ' ' + numberType

  return formattedNum
}
export const removeFormatting = (formattedNum: string): string => {
  // Remove any non-digit characters from the string
  console.log(formattedNum)

  const numWithoutFormatting = formattedNum
    .replace('m²', '')
    .replace(/[^\d]/g, '')
  console.log(numWithoutFormatting)

  return numWithoutFormatting
}
