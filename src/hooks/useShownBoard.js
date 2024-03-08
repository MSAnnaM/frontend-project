import { useSelector } from 'react-redux';
import { selectShownBoard } from '../redux/column/selectors';

export const useShownBoard = () => useSelector(selectShownBoard);
