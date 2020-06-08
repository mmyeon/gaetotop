import { createAction, handleActions } from "redux-actions";

const GET = "sample/GET";

export const get = createAction(GET, () => {});

const initialState = {
  miyeon: "메롱",
};

const actions = handleActions(
  {
    [GET]: (state, {}) => {
      console.log("잘 왔니?");
      return { ...state };
    },
  },
  initialState
);

export default actions;
