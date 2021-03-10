const {CHANGE_PHOTOS} = require("../actionTypes");

const defaultState = {
  groupTitle: "qwe1",
  photosLink: []
}

export function photosReducer(state = defaultState, action) {
  switch(action.type) {
    case CHANGE_PHOTOS:
      return {
        ...state,
        groupTitle: action.payload.groupTitle,
        photosLink: action.payload.photosLink
      }
  }

  return state
}