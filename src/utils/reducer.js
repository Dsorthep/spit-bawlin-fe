import { CONSTANTS } from "./CONSTANTS";

export const reducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.APPEND_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case CONSTANTS.APPEND_RESOURCE:
      console.log("triggered", state, action.payload)
      return {
        ...state,
        resources: [...state.resources, action.payload]
      };
    default:
      break;
  }
};
