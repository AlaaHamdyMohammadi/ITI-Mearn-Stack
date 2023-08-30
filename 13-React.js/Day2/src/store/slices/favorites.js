import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  //count: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // changeFavorites: function (state, action) {
    //   state.favorites = action.payload;
    // },
    addFavorite: function(state, action){
        const movie = state.favorites.find(mov => mov.id == action.payload.id );
        if(!movie){
            state.favorites.push(action.payload);
            //state.count += 1;
        }else{
            state.favorites = state.favorites.filter(
              (mov) => mov.id != action.payload.id
            );
        }
    },
    // removeFavorite: function(state, action){
    //     //state.count -= 1;
    // }
  },
});

export const { addFavorite, removeFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
