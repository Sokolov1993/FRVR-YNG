import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [...(JSON.parse(localStorage.getItem('favorites')) ?? [])],
    openFavModal: false,
  },

  reducers: {
    addToFavorites: (state, action) => {
      if (
        !state.favorites.some((item) => item.title === action.payload.title)
      ) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    deleteFromFavorites: (state, action) => {
      const filtereFavoritesData = state.favorites.filter(
        (item) => item.id !== action.payload
      );

      state.favorites = filtereFavoritesData;
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    openFavModal: (state, action) => {
      state.openFavModal = action.payload;
    },
  },
});

export const { addToFavorites, deleteFromFavorites, openFavModal } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
