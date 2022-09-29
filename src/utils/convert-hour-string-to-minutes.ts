export function convertHoursStringToMinutes(hoursString : string) {
  const hoursArray = hoursString.split(':')
  const [hours, minutes] = hoursArray.map(Number)

  const minutesAmount = (hours * 60) + minutes

  return minutesAmount
  
}