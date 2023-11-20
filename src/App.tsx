import { Routes, Route } from 'react-router-dom';

import './globals.css';
import { Home } from './_root/pages';
import SignUpForm from './_auth/forms/SignUpForm';
import SignInForm from './_auth/forms/SignInForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {

  return (
    <div className="flex h-screen">
      <Routes>
        {/*  Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
        </Route>

        {/*  Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
