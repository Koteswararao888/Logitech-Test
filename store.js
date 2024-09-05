import { configureStore } from '@reduxjs/toolkit';
import orderBookReducer from '../LogiiTech/orderBookSlice'; // Confirm this path

export const store = configureStore({
  reducer: {
    orderBook: orderBookReducer, // Using descriptive name
  },
});
export default store;