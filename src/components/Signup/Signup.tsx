import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignUpProps } from './interface';


const SignUp: React.FC<SignUpProps> = ({ onSignUp, onLogin, isModal = false }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp && onSignUp();
  };

  const renderFooter = () => {
    return (
      <p className="mt-4 text-[#7e8084] flex">
        Already have an account? 
        { isModal ?
          <p className="text-[#97999d] cursor-pointer ml-2" onClick={onLogin}>
            Login →
          </p>
        : 
        <Link to="/login" className="text-[#97999d] ml-2">Login →</Link>}
      </p>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center justify-center ${!isModal ? 'min-h-screen' : ''}`}
    >
      <div className={`bg-[#27292D] text-[#C5C7CA] ${isModal ? '' : 'border-2 border-[#5e5e5e]'} p-8 rounded-lg shadow-lg w-full max-w-md`}>
        <h2 className='text-[#6B6C70] text-sm text-center'>Signup</h2>
        <h2 className="text-lg font-bold mb-6 text-center">Create an account to continue</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-[#27292d] border border-[#35373B] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-[#27292d] border border-[#35373B] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a preferred username"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-[#27292d] border border-[#35373B] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a strong password"
            />
            <div 
              onClick={toggleShowPassword} 
              className="absolute top-[2.8rem] right-0 pr-3 flex items-center cursor-pointer"
            >
              <img src='/eye.svg' width={20} height={20} alt='eye icon' />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
        </form>

        {renderFooter()}

      </div>
    </motion.div>
  );
};

export default SignUp;