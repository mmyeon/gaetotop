const UPDATE_Y_OFFSET = "scroll/UPDATE_Y_OFFSET";
const UPDATE_MAX_SCROLL_VALUE = "scroll/UPDATE_MAX_SCROLL_VALUE";
const UPDATE_SCROLL_STATE = "scroll/UPDATE_SCROLL_STATE";
const UPDATE_LAST_SCROLL_TOP = "scroll/UPDATE_LAST_SCROLL_TOP";

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

export const updateScrollState = (val) => {
  return {
    type: UPDATE_SCROLL_STATE,
    scrollState: val,
  };
};

export const updateLastScrollTop = (val) => {
  return {
    type: UPDATE_LAST_SCROLL_TOP,
    lastScrollTop: val,
  };
};

const initialState = {
  yOffset: 0,
  zMove: 0,
  maxScrollValue: 1,
  scrollPer: 0,
  scrollState: false,
  lastScrollTop: 0,
  direction: "front",
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
        lastScrollTop: state.yOffset,
        direction: state.yOffset > action.yOffset ? "front" : "back",
      };
    case UPDATE_MAX_SCROLL_VALUE:
      scrollPer = state.yOffset / action.maxScrollValue;
      return {
        ...state,
        scrollPer,
        zMove: parseInt(scrollPer * 980, 10) - 490,
        maxScrollValue: action.maxScrollValue,
      };
    case UPDATE_SCROLL_STATE:
      return {
        ...state,
        scrollState: action.scrollState,
      };
    case UPDATE_LAST_SCROLL_TOP:
      return {
        ...state,
        lastScrollTop: action.lastScrollTop,
      };
    default:
      return state;
  }
}

export default scroll;
