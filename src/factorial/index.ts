/**
 * Return a factorial of a given number
 * @param value number
 */
export function factorial(value: number): number {
  if (value < 0) return -1
  if (value === 0) return 1
  return value * factorial(value - 1)
}
