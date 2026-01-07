
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, Bot, User } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const AIChatbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the Milo and Madi pitch assistant. Have any questions about the characters, the story, or our vision for this graphic novel?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await geminiService.sendMessage(userMessage, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-[500px] overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="text-sky-500 w-5 h-5" />
          <h4 className="font-bold text-slate-800">Pitch Assistant</h4>
        </div>
        <span className="text-[10px] bg-sky-100 text-sky-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">AI Powered</span>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-sky-500 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-700 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Bot size={16} />
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center h-10">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
             </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-50 bg-white">
        <div className="relative">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about the pitch..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 transition-all text-sm"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-sky-500 hover:bg-sky-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChatbox;
