import {sortPhotos} from "./sort-photos"

const smallPhoto = {
  link: '',
  size: 'small'
}

const largePhoto = {
  link: '',
  size: 'large'
}


test('PhotosSort (default) test', () => {
  const inputData = [smallPhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, largePhoto]
  const outputData = [smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto]

  expect(sortPhotos(inputData)).toEqual(outputData)
})


test('PhotosSort (more largePhoto) test', () => {
  const inputData = [smallPhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, largePhoto, largePhoto, largePhoto, largePhoto]
  const outputData = [smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, largePhoto, largePhoto, largePhoto]

  expect(sortPhotos(inputData)).toEqual(outputData)
})

test('PhotosSort (more largePhoto, excess smallPhoto) test', () => {
  const inputData = [smallPhoto, largePhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, largePhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, largePhoto, largePhoto]
  const outputData = [smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, largePhoto, largePhoto, smallPhoto]

  expect(sortPhotos(inputData)).toEqual(outputData)
})

test('PhotosSort (more smallPhoto) test', () => {
  const inputData = [smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, largePhoto, largePhoto, largePhoto]
  const outputData = [smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, largePhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto, smallPhoto]

  expect(sortPhotos(inputData)).toEqual(outputData)
})