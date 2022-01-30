import { factorial } from './index'

it('should return the factorial of 5 which is 120', () => {
  const actual = factorial(5)
  expect(actual).toEqual(120)
})
