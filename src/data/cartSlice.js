import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [], // array of { name, date, quantity }
  },
  reducers: {
    addEventToCart: (state, action) => {
      const { name, date } = action.payload;
      const existing = state.value.find(
        (event) => event.name === name && event.date === date
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.value.push({ name, date, quantity: 1 });
      }
    },

    removeEventFromCart: (state, action) => {
      const { name, date } = action.payload;
      state.value = state.value.filter(
        (event) => !(event.name === name && event.date === date)
      );
    },

    incrementEventQuantity: (state, action) => {
      const { name, date } = action.payload;
      const existing = state.value.find(
        (event) => event.name === name && event.date === date
      );
      if (existing) {
        existing.quantity += 1;
      }
    },

    decrementEventQuantity: (state, action) => {
      const { name, date } = action.payload;
      const existing = state.value.find(
        (event) => event.name === name && event.date === date
      );
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        // If quantity drops to 0 or less, remove it from cart
        state.value = state.value.filter(
          (event) => !(event.name === name && event.date === date)
        );
      }
    },

    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const {
  addEventToCart,
  removeEventFromCart,
  incrementEventQuantity,
  decrementEventQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
