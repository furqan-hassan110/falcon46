import { createStore } from "redux";
import checkMode from "./mode";

const store = createStore(checkMode);

export default store