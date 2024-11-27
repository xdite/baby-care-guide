import React from 'react';
import { SoothingGuide } from '@/components/SoothingGuide';

export const SoothingPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">寶寶安撫指南</h1>
      <SoothingGuide />
    </div>
  );
};