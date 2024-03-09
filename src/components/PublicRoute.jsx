import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../redux/auth/selectors';

// export const PublicRoute = ({ children }) => {
//   const isAuthorized = useSelector(isLoggedIn);
//   return isAuthorized ? <Navigate to="/home" /> : children;
// };

export const PublicRoute = ({ children }) => {
  const isAuthorized = useSelector(isLoggedIn);

  return isAuthorized ? <Navigate to="/home" /> : children;
};
