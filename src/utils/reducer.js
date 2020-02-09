import { CONSTANTS } from "./CONSTANTS";

export const reducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.APPEND_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    default:
      break;
  }
};
