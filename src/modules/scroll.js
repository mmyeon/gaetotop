const UPDATE_Y_OFFSET = "scroll/UPDATE_Y_OFFSET";
const UPDATE_Z_MOVE = "scroll/UPDATE_Z_MOVE";
const UPDATE_MAX_SCROLL_VALUE = "scroll/UPDATE_MAX_SCROLL_VALUE";

export const updateYOffset = (val) => {
  return {
    type: UPDATE_Y_OFFSET,
    yOffset: val,
  };
};

export const updateZMove = (val) => {
  return {
    type: UPDATE_Z_MOVE,
    zMove: val,
  };
};

export const updateMaxScrollValue = (val) => {
  return {
    type: UPDATE_MAX_SCROLL_VALUE,
    maxScrollValue: val,
  };
};

const initialState = {
  yOffset: 0,
  zMove: 0,
  maxScrollValue: 1,
};

function scroll(state = initialState, action) {
  switch (action.type) {
    case UPDATE_Y_OFFSET:
      return {
        ...state,
        yOffset: action.yOffset,
      };
    case UPDATE_Z_MOVE:
      return {
        ...state,
        zMove: action.zMove,
      };
    case UPDATE_MAX_SCROLL_VALUE:
      return {
        ...state,
        maxScrollValue: action.maxScrollValue,
      };
    default:
      return state;
  }
}

export default scroll;
