import { listShuffle } from './index'

it('should return a randomize number based on input', () => {
  const input = [1, 2, 3, 4, 5]
  const actual = listShuffle(input)
  expect(actual).not.toEqual(input)
})
