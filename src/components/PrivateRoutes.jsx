import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const isAuthorized = useSelector(isLoggedIn);

  return isAuthorized ? children : <Navigate to="/auth/login" />;
};
