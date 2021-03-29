export const sortPhotos = (array) => {
  const smallPhotos = []
  const largePhotos = []

  array.forEach((i) => {
    if (i.size === 'small') smallPhotos.push(i)
    else largePhotos.push(i)
  })

  let lastSmallPhotos = null
  const isExcessSmallPhotosElement = smallPhotos.length % 2 !== 0

  if (isExcessSmallPhotosElement) {
    lastSmallPhotos = smallPhotos[smallPhotos.length - 1]
    smallPhotos.splice(smallPhotos.length - 1, 1)
  }

  const resultArray = []

  const lengthArray = smallPhotos.length + largePhotos.length
  const indexThreeable = []

  for (let i = 2; i < lengthArray; i += 3) {
    indexThreeable.push(i)
  }

  let i = 0
  let j = 0
  let x = 0

  while (i < lengthArray) {
    if (i === indexThreeable[j]) {
      if (largePhotos[j] !== undefined) {
        resultArray.push(largePhotos[j])
        j++
      } else {
        resultArray.push(smallPhotos[x])
        x++
      }
    } else {
      if (smallPhotos[x] !== undefined) {
        resultArray.push(smallPhotos[x])
        x++
      } else {
        resultArray.push(largePhotos[j])
        j++
      }
    }

    i++
  }

  if (isExcessSmallPhotosElement) {
    resultArray.push(lastSmallPhotos)
  }

  return resultArray
}