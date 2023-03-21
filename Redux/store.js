import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Slice/userSlice';
import tokenReducer from "./Slice/tokenSlice";
import menuReducer from "./Slice/menuSlice"
import requestReducer from "./Slice/requestSlice";

export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer: {
        user: userReducer,
        token: tokenReducer,
        menu: menuReducer,
        request: requestReducer
    },
});