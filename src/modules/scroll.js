const UPDATE_Y_OFFSET = "scroll/UPDATE_Y_OFFSET";
const UPDATE_MAX_SCROLL_VALUE = "scroll/UPDATE_MAX_SCROLL_VALUE";

export const updateYOffset = (val) => {
  return {
    type: UPDATE_Y_OFFSET,
    yOffset: val,
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
  scrollPer: 0,
};

function scroll(state = initialState, action) {
  let scrollPer;
  switch (action.type) {
    case UPDATE_Y_OFFSET:
      scrollPer = action.yOffset / state.maxScrollValue;
      return {
        ...state,
        scrollPer,
        zMove: parseInt(scrollPer * 980, 10) - 490,
        yOffset: action.yOffset,
      };
    case UPDATE_MAX_SCROLL_VALUE:
      scrollPer = state.yOffset / action.maxScrollValue;
      return {
        ...state,
        scrollPer,
        zMove: parseInt(scrollPer * 980, 10) - 490,
        maxScrollValue: action.maxScrollValue,
      };
    default:
      return state;
  }
}

export default scroll;
