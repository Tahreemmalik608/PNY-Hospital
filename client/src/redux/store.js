import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../redux/actions/counter.slice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
  })