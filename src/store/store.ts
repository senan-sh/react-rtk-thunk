import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import counterReducer from "./reducer"

export const reduxStore = configureStore({
    reducer: {
        counterReducer
    },
    middleware: [thunk]
});