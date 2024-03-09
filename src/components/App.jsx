import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCardModal from './ScreensPage/CardModals/AddCardModal/AddCardModal';
import EditCardModal from './ScreensPage/CardModals/EditCardModal/EditCardModal';
import EditUserModal from './staticComponents/EditUserModal';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';
// import EditCardModal from './EditCardModal/EditCardModal';
import { useDispatch, useSelector } from 'react-redux';
import { isRefreshing } from '../redux/user/selectors';
import { refreshUser } from '../redux/user/userApi';
import ScreensPage from 'pages/ScreensPage';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const WelcomeView = lazy(() =>
  import('components/Auth/WelcomeView/WelcomeView')
);

const RegisterForm = lazy(() =>
  import('components/Auth/RegisterForm/RegisterForm')
);

const LoginForm = lazy(() => import('components/Auth/LoginForm/LoginForm'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshed && (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          >
            <Route index element={<WelcomeView />} />
            {/* Public Route from AuthPage */}
            <Route
              path="/auth/*"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            >
              <Route path="register" element={<RegisterForm />} />

              <Route path="login" element={<LoginForm />} />
            </Route>
            <Route path="edit" element={<EditUserModal />} />
            <Route path="add" element={<AddCardModal />} />
            <Route path="editCard" element={<EditCardModal />} />
          </Route>

          {/* Private Route from HomePage */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          >
            <Route path="/home/:boardName" element={<ScreensPage />} />
          </Route>
        </Routes>
      </>
    )
  );
};
