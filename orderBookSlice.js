import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bids: [],
  asks: [],
  precision: 2,
  zoom: 1,
};

const orderBookSlice = createSlice({
  name: 'orderBook',
  initialState,
  reducers: {
    updateOrderBook: (state, action) => {
      const [bids, asks] = action.payload;
      state.bids = bids;
      state.asks = asks;
    },
    setPrecision: (state, action) => {
      state.precision = action.payload;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});

export const { updateOrderBook, setPrecision, setZoom } = orderBookSlice.actions;
export default orderBookSlice.reducer;
