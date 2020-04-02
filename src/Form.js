import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const handleChange = e => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>Your input: {email}</h1>
      <input type="text" value={email} onChange={handleChange} />
    </div>
  );
};

export default Form;
