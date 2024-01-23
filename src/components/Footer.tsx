import { FILTER_TYPES } from '../filters'
import { setFilter } from '../store/reducers/filtersReducer'
import { useAppDispatch } from '../store/store'

export const Footer: React.FC = () => {
  const filterDispatch = useAppDispatch()
  return (
        <footer>
        <button onClick={() => { filterDispatch(setFilter(FILTER_TYPES.ALL)) }}> All </button>
        <button onClick={() => { filterDispatch(setFilter(FILTER_TYPES.ACTIVE)) }}> Active </button>
        <button onClick={() => { filterDispatch(setFilter(FILTER_TYPES.COMPLETED)) }}> Completed </button>
        </footer>
  )
}
