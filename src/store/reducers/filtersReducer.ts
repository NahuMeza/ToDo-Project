import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FILTER_TYPES, type FilterTypes } from '../../filters'

const initialState: FilterTypes = FILTER_TYPES.ALL

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState as FilterTypes,
  reducers: {
    setFilter: (_state, action: PayloadAction<FilterTypes>): FilterTypes => {
      return action.payload
    }
  }
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
