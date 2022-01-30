import { dateValidator } from './index'
// ,  ,
it('should allow mm/dd/yyyy date format', () => {
  const actual = dateValidator('11/27/1988')
  expect(actual).toEqual(true)
})

it('should allow m/d/yyyy, date format', () => {
  const actual = dateValidator('1/2/1988')
  expect(actual).toEqual(true)
})

it('should allow mm/d/yyyy, date format', () => {
  const actual = dateValidator('11/2/1988')
  expect(actual).toEqual(true)
})

it('should allow  m/dd/yyyy, date format', () => {
  const actual = dateValidator('1/22/1988')
  expect(actual).toEqual(true)
})
