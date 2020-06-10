const UPDATE_Y_OFFSET = "scroll/UPDATE_Y_OFFSET";

export const updateYOffset = (val) => {
  console.log("val", val);
  return {
    type: UPDATE_Y_OFFSET,
    yOffset: val,
  };
};

const initialState = {
  yOffset: 0,
};

function scroll(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    // TODO: 메인 컴포넌트에서 리듀서 호출될 때 인자로 들어온 window.pageYOffset을 반영하도록 수정
    case UPDATE_Y_OFFSET:
      return {
        ...state,
        yOffset: action.yOffset,
      };
    default:
      return state;
  }
}

export default scroll;
