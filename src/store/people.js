import listFactory from "./generic/list";
import { person } from "../utils/dataGetter";

const reducer = {
  ...listFactory(person),
};

export default reducer;
