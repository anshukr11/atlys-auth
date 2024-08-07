import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginProps } from './interface';

const Login: React.FC<LoginProps> = ({ onLogin , onSignUp, isModal = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string, password?: string }>({});

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors: { email?: string, password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onLogin();
    }
  };

  const renderFooter = () => {
    return (
      <p className="mt-4 text-[#7e8084] flex">
        Not registered yet? 
        { isModal ?
          <span className="text-[#97999d] cursor-pointer ml-2" onClick={onSignUp}>
            Register →
          </span>
        : 
        <Link to="/signup" className="text-[#97999d] ml-2">Register →</Link>}
      </p>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center justify-center ${!isModal ? 'min-h-screen' : ''}`}
    >
      <div className={`bg-[#27292D] text-[#C5C7CA] ${isModal ? '' : 'border-2 border-[#5e5e5e]'} p-8 rounded-lg shadow-lg w-full max-w-md`}>
        <h2 className='text-[#6B6C70] text-sm text-center'>WELCOME BACK</h2>
        <h2 className="text-lg font-bold mb-12 text-center">Log into your account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email or Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 bg-[#27292d] border border-[#35373B] rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-500'}`}
              placeholder="Enter your email or username"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6 relative">
            <div className='flex justify-between'>
              <label htmlFor="password" className="block mb-2">Password</label>
              <p className='text-xs mt-1'>Forgot password?</p>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 bg-[#27292d] border border-[#35373B] rounded focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'focus:ring-blue-500'}`}
              placeholder="Enter your password"
            />
            <div 
              onClick={toggleShowPassword} 
              className="absolute top-[2.6rem] right-0 pr-3 flex items-center cursor-pointer"
            >
              <img src='/eye.svg' width={20} height={20} alt='eye icon' />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login now
          </button>
        </form>

        {renderFooter()}
      </div>
    </motion.div>
  );
};

export default Login;
