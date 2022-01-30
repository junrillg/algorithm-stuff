import { numberSearch } from './index'

it('should find the 5 in the sorted number from 1 to 10', () => {
  const actual = numberSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
  expect(actual).toEqual(true)
})

it('should not find the 15 in the sorted number from 1 to 10', () => {
  const actual = numberSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
  expect(actual).toEqual(false)
})
