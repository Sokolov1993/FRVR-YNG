import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },

  reducers: {
    setItemInCart: (state, action) => {
      const extendedItem = {
        ...action.payload,
        quantity: 1,
      };
      state.itemsInCart.push(extendedItem);
      console.log(extendedItem);
    },

    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
    },

    quantityIncrement: (state, action) => {
      const quantity = state.itemsInCart.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });

      state.itemsInCart = quantity;
    },

    quantityDecrement: (state, action) => {
      const quantity = state.itemsInCart.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });

      state.itemsInCart = quantity;
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  quantityIncrement,
  quantityDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
