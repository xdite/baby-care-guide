import React from 'react';
import { Baby } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Baby className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-800">寶寶照護指南</span>
          </Link>
          <div className="flex space-x-4 overflow-x-auto">
            <Link
              to="/signals"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/signals'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              寶寶訊號
            </Link>
            <Link
              to="/feeding"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/feeding'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              餵奶指南
            </Link>
            <Link
              to="/diaper"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/diaper'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              換尿布指南
            </Link>
            <Link
              to="/bath"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/bath'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              洗澡指南
            </Link>
            <Link
              to="/sleep"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/sleep'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              睡眠訓練
            </Link>
            <Link
              to="/soothing"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/soothing'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              安撫指南
            </Link>
            <Link
              to="/illness"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/illness'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              疾病照護
            </Link>
            <Link
              to="/milestone"
              className={`px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/milestone'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              發展里程碑
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};