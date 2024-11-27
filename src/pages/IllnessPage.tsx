import React from 'react';
import { BabyIllnessGuide } from '@/components/BabyIllnessGuide';

export const IllnessPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">寶寶疾病照護指南</h1>
      <BabyIllnessGuide />
    </div>
  );
};