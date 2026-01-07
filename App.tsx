
import React, { useState } from 'react';
import { AuthStatus } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.LOCKED);

  const handleUnlock = () => {
    setAuthStatus(AuthStatus.UNLOCKED);
  };

  return (
    <div className="min-h-screen">
      {authStatus === AuthStatus.LOCKED ? (
        <Login onUnlock={handleUnlock} />
      ) : (
        <Dashboard />
      )}
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default App;
