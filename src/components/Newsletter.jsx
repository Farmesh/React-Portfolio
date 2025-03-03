import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl font-thin mb-4">Stay Updated</h2>
        <p className="text-neutral-400 mb-8">
          Subscribe to my newsletter for the latest project updates.
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-full bg-neutral-800/50 border border-neutral-700 focus:outline-none focus:border-cyan-500 pr-36"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === 'sending'}
            className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium flex items-center gap-2"
          >
            {status === 'sending' ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FaPaperPlane />
              </motion.div>
            ) : status === 'success' ? (
              'Thanks!'
            ) : (
              <>
                Subscribe
                <FaPaperPlane />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Newsletter; 