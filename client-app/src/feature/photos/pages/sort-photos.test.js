import {sortPhotos} from "./sort-photos"




test('PhotosSort (default) test', () => {
  const inputData = [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2]
  const outputData = [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2]

  expect(sortPhotos(inputData)).toEqual(outputData)
})


test('PhotosSort (more 2) test', () => {
  const inputData = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2]
  const outputData = [1, 1, 2, 1, 1, 2, 2, 2, 2, 2]

  expect(sortPhotos(inputData)).toEqual(outputData)
})

test('PhotosSort (more 2, excess 1) test', () => {
  const inputData = [1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2]
  const outputData = [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1]

  expect(sortPhotos(inputData)).toEqual(outputData)
})

test('PhotosSort error test', () => {
  const inputData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2]
  const outputData = [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1]

  expect(sortPhotos(inputData)).toEqual(outputData)
})

test('PhotosSort (more 1) test', () => {
  const inputData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2]
  const outputData = [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1]

  expect(sortPhotos(inputData)).toEqual(outputData)
})