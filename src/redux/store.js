import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialodsReducer";
import postsReducer from "./postsReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: postsReducer
})

let store = createStore(reducers)

export default store