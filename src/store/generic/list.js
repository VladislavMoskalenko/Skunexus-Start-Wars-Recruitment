import { action, thunk } from "easy-peasy";
import sideEffect from "../../utils/sideEffect";

const reducerFactory = (getter) => ({
  loading: false,
  list: [],
  pagination: null,
  getListStart: action((state) => {
    state.loading = true;
    state.pagination = null;
  }),
  clearList: action((state) => {
    state.loading = false;
    state.pagination = null;
    state.list = [];
  }),
  getListSuccess: action((state, payload) => {
    state.list = payload.data;
    state.loading = false;
    state.pagination = payload.pagination;
  }),
  getListFailure: action((state) => {
    state.loading = false;
    state.list = [];
    state.pagination = null;
  }),
  getList: thunk((actions, payload) => {
    actions.getListStart();
    sideEffect(getter, {
      payload,
      success: actions.getListSuccess,
      failure: actions.getListFailure,
    });
  }),
});

export default reducerFactory;
