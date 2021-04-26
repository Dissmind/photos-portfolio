import {imgDomain} from "../../shared/consts";


const photosMock = [
  {
    group: 'family',
    photos: [
      {
        link: imgDomain + 'AL2A0667.jpg',
        size: 'small'
      },
      {
        link: imgDomain + 'AL2A0160.jpg',
        size: 'large'
      },
      {
        link: imgDomain + 'AL2A0593.jpg',
        size: 'large'
      },
      {
        link: imgDomain + 'AL2A0810.jpg',
        size: 'small'
      },
      {
        link: imgDomain + 'AL2A7228.jpg',
        size: 'small'
      },
      {
        link: imgDomain + 'AL2A7228.jpg',
        size: 'small'
      },
      {
        link: imgDomain + 'AL2A7228.jpg',
        size: 'small'
      },      {
        link: imgDomain + 'AL2A7228.jpg',
        size: 'small'
      },
    ]
  },
]




const photosError = {
  errorMessage: 'Error'
}

export const getPhotosMock = (group) => {
  let result

  console.log("group: " + group)

  photosMock.forEach(i => {
     if (i.group === group.toLowerCase()) {
       result = i.photos
     }
   })

   return result || photosError
 }
