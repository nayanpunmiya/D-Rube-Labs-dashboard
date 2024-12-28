import React, { useState } from 'react';

// D-Rube Labs Logo
const DRubeLogo = ({ className }) => (
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ng_MJN9BSH0aHJ-RhTodZtvhQinTp47wMg&s" 
    className={className} 
    alt="D-Rube Labs Logo" 
  />
);

const ShieldIcon = ({ className }) => (
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJvfbmoooo9_1Y-kHRNhUAvEK8nFSg6k4Jw&s" 
    className={className} 
    alt="Shield Icon" 
  />
);

// Dashboard Component
const Dashboard = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  });

  // Login form state and handling
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement actual login logic here
    console.log('Login attempted with:', loginCredentials);
  };

  return (
    <div className="min-h-screen bg-[#c8a000] flex justify-center items-center">
      {/* Login Section */}
      <div className="max-w-md w-full bg-white shadow-2xl rounded-xl p-8">
        <div className="text-center mb-6">
          <ShieldIcon className="w-16 h-16 mx-auto text-[#c8a000] mb-4" />
          <h2 className="text-2xl font-bold text-[#c8a000]">D-Rube Labs Dashboard Login</h2>
          <p className="text-gray-800 mt-2">Secure Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[#c8a000] mb-2">Email Address</label>
            <input
              type="email"
              value={loginCredentials.email}
              onChange={(e) => setLoginCredentials({...loginCredentials, email: e.target.value})}
              placeholder="your.email@drube.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a000] transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-[#c8a000] mb-2">Password</label>
            <input
              type="password"
              value={loginCredentials.password}
              onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a000] transition-all"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="flex items-center text-gray-800">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#c8a000] text-white py-3 rounded-lg hover:bg-black hover:text-[#c8a000] transition-all shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;