import { createAction, handleActions } from "redux-actions";

const GET_NOW = "sample/GET_NOW";

export const getNow = createAction(GET_NOW, () => {});

const initialState = {
  now: 0,
};

const actions = handleActions(
  {
    [GET_NOW]: (state, {}) => {
      console.log("잘 왔니?");
      return { ...state };
    },
  },
  initialState
);

export default actions;
