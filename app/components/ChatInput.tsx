'use client';

import { Paperclip, Send } from 'lucide-react';
import { useState } from 'react';

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      console.log('Message:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 lg:left-[280px] right-0 p-6 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e] to-transparent">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="relative flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl shadow-black/20 px-5 py-4 focus-within:ring-2 focus-within:ring-violet-500/50 focus-within:border-violet-500/50 transition-all">
          {/* Paperclip Icon */}
          <button
            type="button"
            className="flex-shrink-0 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Paperclip size={20} />
          </button>

          {/* Input Field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything …"
            className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none text-sm tracking-wide"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!message.trim()}
            className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
