import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SortProp = 'rating' | 'price' | 'title' | '-rating' | '-price' | '-title';

export interface FilterSliceState {
  sort: SortProp;
  category: number,
  searchValue: string,
  currentPage: number
}

const initialState: FilterSliceState = {
  sort: 'rating',
  category: 0,
  searchValue: '',
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
      console.log('category ', state.category);
    },
    setSort(state, action: PayloadAction<SortProp>) {
      state.sort = action.payload;
      console.log('sort ', state.sort);
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      console.log('searchValue ', state.searchValue);
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      console.log('pageCount ', state.currentPage);
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.category = +action.payload.category;
        state.currentPage = +action.payload.currentPage;
      } else {
        state.sort = 'rating';
        state.category = 0;
        state.currentPage = 1;
      }
    }
  }
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategory, setSort, setSearchValue, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
