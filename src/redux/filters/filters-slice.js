import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getIngridients, getGlasses } from './filters-operation';
import { hanlePending, handleRejected } from '../handlers';

const initialState = {
  searchQuery: '',
  categories: [],
  ingridients: [],
  glasses: [],
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  extraReducers: (builder) =>
    builder
      //===================================================
      // .addCase(getRequestedName.pending, hanlePending)
      // .addCase(getRequestedName.fulfilled, (state, action) => {
      //   state.searchQuery = action.payload;
      //   state.isLoading = false;
      //   state.error = null;
      // })
      // .addCase(getRequestedName.rejected, handleRejected)
      //===================================================
      // .addCase(getSearchQuery, (state, action) => {
      //   state.searchQuery = action.payload;
      // })
      .addCase(getCategories.pending, hanlePending)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getIngridients.pending, handleRejected)
      .addCase(getIngridients.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
      })
      .addCase(getIngridients.rejected, handleRejected)
      .addCase(getGlasses.pending, hanlePending)
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGlasses.rejected, handleRejected),
  
  reducers: {
    setSearchQuery: {
      reducer: (state, action) => {
        state.searchQuery = action.payload;
      },

      prepare: searchQuery => {
        return { payload: searchQuery };
      },
    },
  },
});

export const filtersReducer = filterSlice.reducer;