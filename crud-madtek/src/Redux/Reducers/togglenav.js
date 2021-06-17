import { TOGGLE} from "../types";

const togglenavReducer = (state = {toggle1:JSON.parse(localStorage.getItem('toggle1'))}, action) => {
  switch (action.type) {
    case TOGGLE:
      return { toggle1: action.payload };
    
    default:
      return state;
  }
};
export { togglenavReducer };
