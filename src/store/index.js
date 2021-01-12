import { createStore } from "easy-peasy";
import people from "./people";
import planets from "./planets";
import films from "./films";

export default createStore({
  people,
  planets,
  films,
});
