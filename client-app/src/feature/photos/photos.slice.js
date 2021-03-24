import {createSlice} from "@reduxjs/toolkit";


export const photosSlice = createSlice({
  name: "photos",

  initialState: {
    groupTitle: "test-qwe",
    photosLinks: [],
  },

  reducers: {
    setTitle: (state, action) => {
      state.groupTitle = action.payload
    },
  },
})

export const { setTitle } = photosSlice.actions

//Selectors
export const selectGroupTitle = (state) => state.photos.groupTitle

export const photosReducer = photosSlice.reducer