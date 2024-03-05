import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const PublicRoute = ({ children }) => {
  const isAuthorized = useSelector(selectIsLoggedIn);
  return isAuthorized ? <Navigate to="/home" /> : children;
};
