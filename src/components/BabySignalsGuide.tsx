import React from 'react';
import { SignalCard } from '@/components/SignalCard';
import { babySignals } from '@/data/babySignals';

export const BabySignalsGuide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 grid gap-6 md:grid-cols-2 grid-cols-1">
      {babySignals.map((signal, index) => (
        <SignalCard key={index} signal={signal} />
      ))}
    </div>
  );
};