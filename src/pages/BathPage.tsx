import React from 'react';
import { BathGuide } from '@/components/BathGuide';

export const BathPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">寶寶洗澡指南</h1>
      <BathGuide />
    </div>
  );
};