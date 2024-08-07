// App.tsx
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import PostFeed from './components/PostFeed/PostFeed';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import SignUp from './components/Signup/Signup';
import useAuth from './hooks/useAuth';

const App: React.FC = () => {
  const { isAuthenticated, login, logout, signUp } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-[#141318] text-white">
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/feed" replace /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/feed" replace /> : <Login onLogin={login} />} 
          />
          <Route 
            path="/signup" 
            element={isAuthenticated ? <Navigate to="/feed" replace /> : <SignUp onSignUp={signUp} />} 
          />
          <Route 
            path="/feed" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PostFeed onLogout={logout} isAuthenticated={isAuthenticated} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;