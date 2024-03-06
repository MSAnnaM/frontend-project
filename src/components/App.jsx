import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCardModal from './AddModal/AddCardModal';
import EditUserModal from './staticComponents/EditUserModal';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

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
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
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
          фія <Route path="edit" element={<EditUserModal />} />
          <Route path="add" element={<AddCardModal />} />
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
          {/* <Route path="/home/:boardName" element={<ScreensPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
