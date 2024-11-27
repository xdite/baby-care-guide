import React from 'react';
import { FeedingGuide } from './FeedingGuide';

export const FeedingPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8">餵奶指南</h1>
      <FeedingGuide />
    </div>
  );
};