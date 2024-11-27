import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { SignalsPage } from '@/pages/SignalsPage';
import { FeedingPage } from '@/pages/FeedingPage';
import { DiaperPage } from '@/pages/DiaperPage';
import { BathPage } from '@/pages/BathPage';
import { SleepPage } from '@/pages/SleepPage';
import { SoothingPage } from '@/pages/SoothingPage';
import { IllnessPage } from '@/pages/IllnessPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/signals" replace />} />
            <Route path="/signals" element={<SignalsPage />} />
            <Route path="/feeding" element={<FeedingPage />} />
            <Route path="/diaper" element={<DiaperPage />} />
            <Route path="/bath" element={<BathPage />} />
            <Route path="/sleep" element={<SleepPage />} />
            <Route path="/soothing" element={<SoothingPage />} />
            <Route path="/illness" element={<IllnessPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;