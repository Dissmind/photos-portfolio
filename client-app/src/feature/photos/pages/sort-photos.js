export const sortPhotos = (array) => {
  const one = []
  const two = []


  array.forEach((i) => {
    if (i === 1) one.push(i)
    else two.push(i)
  })

  let lastOne = null
  const isExcessOneElement = one.length % 2 !== 0

  if (isExcessOneElement) {
    lastOne = one[one.length - 1]
    one.splice(one.length - 1, 1)
  }

  const resultArray = []

  const lengthArray = one.length + two.length
  const indexThreeable = []

  for (let i = 2; i < lengthArray; i += 3) {
    indexThreeable.push(i)
  }

  let i = 0
  let j = 0
  let x = 0

  while (i < lengthArray) {
    if (i === indexThreeable[j]) {
      if (two[j] !== undefined) {
        resultArray.push(two[j])
        j++
      } else {
        resultArray.push(one[x])
        x++
      }
    } else {
      if (one[x] !== undefined) {
        resultArray.push(one[x])
        x++
      } else {
        resultArray.push(two[j])
        j++
      }
    }

    i++
  }

  if (isExcessOneElement) {
    resultArray.push(lastOne)
  }

  return resultArray
}