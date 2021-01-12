import listFactory from "./generic/list";
import { film } from "../utils/dataGetter";

const reducer = {
  ...listFactory(film),
};

export default reducer;
