export function numberSearch(
  list: number[],
  item: number,
  start = 0,
  end = list.length
) {
  if (start > end) return false

  let mid = Math.floor((start + end) / 2)

  if (list[mid] === item) return true

  if (list[mid] > item) return numberSearch(list, item, start, mid - 1)
  return numberSearch(list, item, mid + 1, end)
}
