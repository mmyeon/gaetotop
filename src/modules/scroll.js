// import { createAction, handleActions } from "redux-actions";

const UPDATE_Y_OFFSET = "scroll/UPDATE_Y_OFFSET";

export const updateYOffset = () => ({
  type: UPDATE_Y_OFFSET,
});

const initialState = {
  yOffset: 0,
};

function scroll(state = initialState, action) {
  switch (action.type) {
    // TODO: 메인 컴포넌트에서 리듀서 호출될 때 인자로 들어온 window.pageYOffset을 반영하도록 수정
    case UPDATE_Y_OFFSET:
      return {
        ...state,
        yOffset: state.value,
      };
    default:
      return state;
  }
}

// export const updateYOffset = createAction(UPDATE_Y_OFFSET, (val) => ({ val }));

// const actions = handleActions(
//   {
//     [UPDATE_Y_OFFSET]: (state, { payload }) => {
//       return { ...state, yOffset: payload.val };
//     },
//   },
//   initialState
// );

export default scroll;
