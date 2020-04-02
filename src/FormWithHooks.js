import React from 'react';
import useFormState from './customHooks/useFormState';

const Form = () => {
  const [email, updateEmail, resetEmail] = useFormState('');
  const [password, updatePassword, resetPassword] = useFormState('');

  return (
    <div>
      <h1>Your email: {email}</h1>
      <h1>Your password: {password}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
};

export default Form;
