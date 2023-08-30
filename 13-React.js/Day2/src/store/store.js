import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language";
import loaderReducer  from "./slices/loader";
import favoritesReducer from "./slices/favorites";
import counterReducer from "./slices/counter";

const store = configureStore({
  reducer: {
    language: languageReducer,
    loader: loaderReducer,
    favorites: favoritesReducer,
    counter: counterReducer
  },
});

export default store;