export function listShuffle(list) {
  const cloneList = [...list]
  for (let i = cloneList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cloneList[i], cloneList[j]] = [cloneList[j], cloneList[i]]
  }
  return cloneList
}
