import {configureStore} from "@reduxjs/toolkit";
import {photosReducer} from "../feature/photos/photos.slice";

export const store = configureStore({
  reducer: {
    photos: photosReducer
  }
})
