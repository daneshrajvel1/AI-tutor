'use client';

import { motion } from 'framer-motion';
import ChatInput from './components/ChatInput';

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col">
      {/* Main Content - Centered Text */}
      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-2"
        >
          <p className="text-zinc-400 text-lg tracking-wide">
            Hi, I&apos;m your Private Tutor
          </p>
          <h1 className="text-white text-5xl font-bold tracking-tight">
            How can I help, Chief?
          </h1>
        </motion.div>
      </div>

      {/* Chat Input at Bottom */}
      <ChatInput />
    </div>
  );
}
