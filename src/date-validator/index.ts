const DATE_REGEX = /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.]([1-9][1-9])\d\d$/

/**
 * Validate if the date is formatted by mm/dd/yyyy, m/d/yyyy, mm/d/yyyy, m/dd/yyyy
 * @param date formatted date value to be validated
 */
export function dateValidator(date: string): boolean {
  return DATE_REGEX.test(date)
}
