import { createAction, handleActions } from "redux-actions";

const UPDATE_Y_OFFSET = "scroll/UPDATE_Y_OFFSET";

export const updateYOffset = createAction(UPDATE_Y_OFFSET, (val) => ({ val }));

const initialState = {
  yOffset: 0,
};

const actions = handleActions(
  {
    [UPDATE_Y_OFFSET]: (state, { payload }) => {
      return { ...state, yOffset: payload.val };
    },
  },
  initialState
);

export default actions;
