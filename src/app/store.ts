
import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from './reducerSlice/watchListSlice';



export const store = configureStore({
  reducer: {

    watchList: watchListReducer,
    watching:watchListReducer,
    watched:watchListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
