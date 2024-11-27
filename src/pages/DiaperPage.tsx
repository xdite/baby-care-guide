import React from 'react';
import { DiaperChangeGuide } from '@/components/DiaperChangeGuide';

export const DiaperPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">換尿布指南</h1>
      <DiaperChangeGuide />
    </div>
  );
};