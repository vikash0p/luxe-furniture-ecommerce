import LoginForm from '@/components/utils-components/form-components/LoginForm';
import React from 'react';
import { LoginMeta } from '@/src/meta/LoginMeta';
export const metadata = LoginMeta;
const Login = () => {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-5">
      <LoginForm />
    </div>
  );
};

export default Login;
