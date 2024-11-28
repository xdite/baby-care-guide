import React from 'react';
import { MilestoneGuide } from '@/components/MilestoneGuide';

export const MilestonePage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">寶寶發展里程碑</h1>
      <MilestoneGuide />
    </div>
  );
}; 