import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BabySignal } from '@/data/babySignals';

interface SignalCardProps {
  signal: BabySignal;
}

export const SignalCard: React.FC<SignalCardProps> = ({ signal }) => {
  const Icon = signal.icon;
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-1 bg-gray-50">
        <div className="flex items-center space-x-2">
          <Icon className="w-6 h-6" />
          <CardTitle className="text-xl font-bold">{signal.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">主要表現：</h4>
            <ul className="space-y-2">
              {signal.signs.map((sign, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">時間規律：</h4>
            <p className="text-gray-600">{signal.timing}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">關鍵區別：</h4>
            <p className="text-gray-600">{signal.key_diff}</p>
          </div>
          <div className="pt-2 border-t">
            <p className="text-sm text-orange-600">
              <strong>提醒：</strong> {signal.warning}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};