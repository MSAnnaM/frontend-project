import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn, isRefreshing } from '../redux/auth/selectors';

// export const PrivateRoute = ({ children }) => {
//   const isAuthorized = useSelector(isLoggedIn);

//   return isAuthorized ? children : <Navigate to="/auth/login" />;
// };

export const PrivateRoute = ({ children }) => {
  const isAuthorized = useSelector(isLoggedIn);
  const isRefreshed = useSelector(isRefreshing);
  const shouldRedirect = !isAuthorized && !isRefreshed;

  return shouldRedirect ? <Navigate to="/auth/login" /> : children;
};
