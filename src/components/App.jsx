import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import EditUserModal from './staticComponents/EditUserModal';


const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const WelcomeView = lazy(() =>
  import('components/Auth/WelcomeView/WelcomeView')
);

const Register = lazy(() =>
  import('components/Auth/RegisterForm/RegisterForm')
);
const Login = lazy(() => import('components/Auth/LoginForm/LoginForm'));
// const Sidebar = lazy(() => import('components/sidebarComponents/Sidebar/Sidebar'))
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

          <Route path="edit" element={<EditUserModal />} />

        </Route>
      </Routes>
    </>
  );
};
