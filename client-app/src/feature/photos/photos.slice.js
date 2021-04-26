import {createSlice} from "@reduxjs/toolkit";


export const photosSlice = createSlice({
  name: "photos",

  initialState: {
    groupTitle: "",
    photos: [],
  },

  reducers: {
    setTitle: (state, action) => {
      state.groupTitle = action.payload.groupTitle
    },

    setPhotos: (state, action) => {
      state.photos = action.payload.photos
    }
  },
})

export const { setTitle, setPhotos } = photosSlice.actions

//Selectors
export const selectGroupTitle = (state) => state.photos.groupTitle
export const selectPhotosLinks = (state) => state.photos.photos

export const selectSmallPhotosCount = (state) => state.photos.photos.reduce((total, item) => {
  if (item.size === 'small') {
    total += 1
  }

  return total
}, 0)

export const photosReducer = photosSlice.reducer