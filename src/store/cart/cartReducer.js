import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [...(JSON.parse(localStorage.getItem('cartItems')) ?? [])],
  },

  reducers: {
    setItemInCart: (state, action) => {
      const extendedItem = {
        ...action.payload,
        quantity: 1,
      };
      state.itemsInCart.push(extendedItem);
      localStorage.setItem('cartItems', JSON.stringify(state.itemsInCart));
      console.log(extendedItem);
    },

    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem('cartItems', JSON.stringify(state.itemsInCart));
    },

    quantityIncrement: (state, action) => {
      const quantity = state.itemsInCart.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      state.itemsInCart = quantity;
      localStorage.removeItem('cartItems');
      localStorage.setItem('cartItems', JSON.stringify(quantity));
    },

    quantityDecrement: (state, action) => {
      const quantity = state.itemsInCart.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });

      state.itemsInCart = quantity;
      localStorage.removeItem('cartItems');
      localStorage.setItem('cartItems', JSON.stringify(quantity));
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
