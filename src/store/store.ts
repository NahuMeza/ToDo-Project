import { configureStore } from '@reduxjs/toolkit'
import { toDoSlice } from './reducers/toDoReducer'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { filtersSlice } from './reducers/filtersReducer'

export const store = configureStore({
  reducer: {
    todo: toDoSlice.reducer,
    filters: filtersSlice.reducer
  }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
