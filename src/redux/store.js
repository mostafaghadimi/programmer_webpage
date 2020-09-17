import { createStore, compose } from "redux";
import rootReducer from "./reducers";

export default createStore(
    rootReducer,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

);
