export function formatMonth(month: number): string {
  return month.toString().padStart(2, '0')
}

export function getFormattedMonth(date: string, day?: boolean): string {
  const adjustedDate = new Date(date)
  // if (adjustedDate.getMonth() === 0) {
  //   adjustedDate.setMonth(1)
  // }

  const month = adjustedDate.getUTCMonth() + 1

  if (day) {
    return formatMonth(adjustedDate.getUTCDate()) + '/' + formatMonth(month)
  }
  return formatMonth(month)
}
