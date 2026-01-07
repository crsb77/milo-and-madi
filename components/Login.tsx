
import React, { useState } from 'react';
import { Smile, Lock } from 'lucide-react';
import { PASSWORD_KEY } from '../constants';

interface LoginProps {
  onUnlock: () => void;
}

const Login: React.FC<LoginProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === PASSWORD_KEY.toLowerCase()) {
      onUnlock();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div 
        className={`w-full max-w-md bg-white rounded-3xl tooth-shadow p-10 text-center transition-all duration-500 transform ${
          isShaking ? 'animate-shake' : ''
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div className="bg-sky-100 p-5 rounded-full ring-8 ring-sky-50">
            <Smile className="w-12 h-12 text-sky-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Restricted Access</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Please enter the password to access the materials for <br/>
          <span className="font-semibold text-sky-500">Milo and Madi: A Tooth Story</span>.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-sky-500 transition-colors">
              <Lock size={18} />
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Password" 
              className="w-full pl-11 pr-4 py-4 rounded-xl border-2 border-slate-100 bg-white focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition-all text-lg text-black placeholder:text-slate-300"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transform active:scale-[0.98] duration-200 text-lg flex items-center justify-center gap-2"
          >
            Unlock Materials
          </button>
          
          {error && (
            <p className="text-red-500 text-sm font-semibold animate-pulse">
              Incorrect password. Please try again.
            </p>
          )}
        </form>

        <div className="mt-8 pt-8 border-t border-slate-50">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Confidential Review Only</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
