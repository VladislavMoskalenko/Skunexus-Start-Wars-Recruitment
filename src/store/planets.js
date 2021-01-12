import { thunk } from "easy-peasy";
import { planet } from "../utils/dataGetter";
import sideEffect from "../utils/sideEffect";
import listFactory from "./generic/list";

const mockAddResult = () => {
  let oneOrZero = Math.random() >= 0.5 ? 1 : 0;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (oneOrZero) {
        res(true);
      } else {
        rej(false);
      }
    }, 1000);
  });
};

const reducer = {
  ...listFactory(planet),
  addPlanet: thunk((actions, payload) => {
    sideEffect(mockAddResult, {
      payload,
      successMessage: "Planet added",
      errorMessage: "Something went wrong",
    });
  }),
};

export default reducer;
