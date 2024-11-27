import React from 'react';
import { BabySignalsGuide } from '@/components/BabySignalsGuide';

export const SignalsPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">寶寶訊號指南</h1>
      <BabySignalsGuide />
    </div>
  );
};