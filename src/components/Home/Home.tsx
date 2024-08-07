import { motion } from 'framer-motion';
import React from 'react';

interface HomeProps {
  onLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ onLogout }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Hello Jane</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </header>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl mb-4">Create post</h2>
        <textarea
          className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="How are you feeling today?"
          rows={3}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Post
        </button>
      </div>
      <div className="space-y-6">
        {/* Sample post */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-600 rounded-full mr-4"></div>
            <div>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-sm text-gray-400">5 mins ago</p>
            </div>
          </div>
          <p className="mb-4">This is a sample post. The actual content would go here.</p>
          <div className="flex items-center text-gray-400">
            <span className="mr-4">👍 5 likes</span>
            <span>💬 2 comments</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;