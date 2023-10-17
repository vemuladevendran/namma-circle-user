import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoader: false
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoader = true;
    },
    hideLoader: (state) => {
      state.isLoader = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showLoader, hideLoader } = loaderSlice.actions

export default loaderSlice.reducer