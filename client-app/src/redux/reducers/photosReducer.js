import {CHANGE_PHOTOS, CHANGE_TITLE} from "../actionTypes";


const defaultState = {
  groupTitle: "",
  photosLink: []
}

export function photosReducer(state = defaultState, action) {
  switch(action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        groupTitle: action.payload.title
      }

    case CHANGE_PHOTOS:
      return {
        ...state,
        groupTitle: action.payload.groupTitle,
        photosLink: action.payload.photosLink
      }
  }

  return state
}