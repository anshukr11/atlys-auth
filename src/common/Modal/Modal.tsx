import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { ModalProps } from './interface';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#27292D] border p-4 rounded-lg shadow-lg relative w-4/12"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white bg-[#131319] flex items-center justify-center"
          style={{ 
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            fontSize: '20px',
          }}
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;