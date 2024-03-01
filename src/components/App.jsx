// import HomePage from 'pages/HomePage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const WelcomeView = lazy(() =>
  import('components/Auth/WelcomeView/WelcomeView')
);
const HomePage = lazy(() => import('pages/HomePage'));

const Register = lazy(() =>
  import('components/Auth/RegisterForm/RegisterForm')
);
const Login = lazy(() => import('components/Auth/LoginForm/LoginForm'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route index element={<WelcomeView />} />
          <Route path="/auth/*" element={<AuthPage />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
