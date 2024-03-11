import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/column/selectors';

export const useFilter = () => useSelector(selectFilter);
