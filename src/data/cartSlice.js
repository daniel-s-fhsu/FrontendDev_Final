import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [], // array of { name, date, quantity }
  },
  reducers: {
    addEventToCart: (state, action) => {
      // Adds an event (identified by name & date) to the cart
      const { name, date, price } = action.payload;
      const index = state.value.findIndex(
        (event) => event.name === name && event.date === date
      );

      if (index !== -1) {
        const updated = {
          ...state.value[index],
          quantity: state.value[index].quantity + 1,
        };
        state.value[index] = updated;
      } else {
        state.value.push({ name, date, price, quantity: 1 });
      }
    },

    removeEventFromCart: (state, action) => {
      // Removes an event from the cart
      const { name, date } = action.payload;
      state.value = state.value.filter(
        (event) => !(event.name === name && event.date === date)
      );
    },

    incrementEventQuantity: (state, action) => {
      // Increment event by one
      const { name, date } = action.payload;
      const index = state.value.findIndex(
        (event) => event.name === name && event.date === date
      );
      if (index !== -1) {
        const updated = {
          ...state.value[index],
          quantity: state.value[index].quantity + 1,
        };
        state.value[index] = updated;
      }
    },

    decrementEventQuantity: (state, action) => {
      // Decrement event by one
      const { name, date } = action.payload;
      const index = state.value.findIndex(
        (event) => event.name === name && event.date === date
      );
      if (index !== -1) {
        const existing = state.value[index];
        if (existing.quantity > 1) {
          const updated = {
            ...existing,
            quantity: existing.quantity - 1,
          };
          state.value[index] = updated;
        } else {
          state.value = state.value.filter(
            (event) => !(event.name === name && event.date === date)
          );
        }
      }
    },

    clearCart: (state) => {
      // Sets cart to empty array
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
