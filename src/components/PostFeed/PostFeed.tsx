// components/PostFeed.tsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import Login from '../Login/Login';
import SignUp from '../Signup/Signup';
import { Post } from './interface';



interface PostFeedProps {
  onLogout: () => void;
  isAuthenticated: boolean;
}

const PostFeed: React.FC<PostFeedProps> = ({ onLogout, isAuthenticated }) => {
  const [newPostContent, setNewPostContent] = useState('');
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: 'Theresa Webb',
      content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      timestamp: '5mins ago',
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: 'Marvin McKinney',
      content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      timestamp: '8mins ago • Edited',
      likes: 5,
      comments: 2,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 max-w-2xl"
    >
      <header className="flex justify-between items-center mb-8">
        <div className='flex-column'>
          <h1 className="text-2xl text-[#C5C7CA] font-bold">Hello Jane</h1>
          <p className='text-[#7F8084]'>How are you doing today? Would you like to share something with the community 🤗</p>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </header>

      <div className="bg-[#27292d] p-6 rounded-lg shadow-lg mb-8" onClick={handleCreatePost}>
        <h2 className="text-xl mb-4">Create post</h2>
        <form onSubmit={handleCreatePost}>
          <textarea
            className="w-full px-3 py-2 bg-[#1a1920] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="How are you feeling today?"
            rows={3}
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-right ml-[84%] text-white px-8 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Post
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#27292d] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full mr-4">
                <img src='/profile1.svg' alt='profile icon' />
              </div>
              <div>
                <h3 className="font-bold">{post.author}</h3>
                <p className="text-sm text-gray-400">{post.timestamp}</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center px-4 py-2 bg-[#1a1920] text-[#7F8084] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
              <div className='rounded-full text-center vertical-center bg-[#27292D] w-[22%] h-[48px]'><p className='mt-[25%]'>👋</p></div>
              <p className='ml-8'>{post.content}</p>
            </div>

            <div className="flex items-center text-gray-400">
              <span>💬 {post.comments} comments</span>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {!isLogin ? (
          <Login 
            onLogin={() => setIsModalOpen(false)} 
            onSignUp={() => setIsLogin(true)}
            isModal={true} 
          />
        ) : (
          <SignUp 
            onSignUp={() => setIsModalOpen(false)}
            onLogin={() => setIsLogin(false)} 
            isModal={true} 
          />
        )}
      </Modal>
    </motion.div>
  );
};

export default PostFeed;