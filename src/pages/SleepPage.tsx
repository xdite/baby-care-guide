import React from 'react';
import { SleepTrainingGuide } from '@/components/SleepTrainingGuide';

export const SleepPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">睡眠訓練指南</h1>
      <SleepTrainingGuide />
    </div>
  );
};