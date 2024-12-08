export function calculateMonthsBetween(
  startMonth: number,
  startYear: number,
  endMonth: number,
  endYear: number,
): number {
  if (
    startMonth < 0 ||
    startMonth > 11 ||
    endMonth < 0 ||
    endMonth > 11 ||
    startYear < 0 ||
    endYear < 0
  ) {
    throw new Error(
      'Invalid date format. Ensure months are between 0-11 and years are non-negative.',
    )
  }

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth)

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const result = years + months / 100

  return parseFloat(result.toFixed(2))
}
