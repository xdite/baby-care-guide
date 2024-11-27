import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Sun, Clock, Star } from 'lucide-react';

export const SleepTrainingGuide: React.FC = () => {
  const guides = [
    {
      title: "睡眠時間規劃",
      icon: <Clock className="w-6 h-6" />,
      items: [
        "0-3個月：每天16-17小時，分3-4次",
        "3-6個月：每天14-15小時，分2-3次",
        "6-12個月：每天12-14小時，午睡1-2次",
        "白天睡眠不要超過3小時",
        "晚上主要睡眠維持7-8小時",
        "觀察倦意徵兆適時入睡"
      ],
      tips: "依據寶寶實際情況調整，不要太過僵化",
      warning: "過度疲累會影響入睡品質"
    },
    {
      title: "睡前儀式建立",
      icon: <Moon className="w-6 h-6" />,
      items: [
        "固定的睡前時間（如晚上8點）",
        "溫馨的洗澡或擦澡時間",
        "穿上舒適的睡衣",
        "輕聲說故事或唱搖籃曲",
        "調暗燈光營造氛圍",
        "循序漸進減少互動"
      ],
      tips: "儀式時間控制在20-30分鐘內",
      warning: "避免太過刺激的活動"
    },
    {
      title: "循序漸進訓練",
      icon: <Star className="w-6 h-6" />,
      items: [
        "第一週：安撫後等待5分鐘",
        "第二週：延長等待時間到10分鐘",
        "第三週：嘗試讓寶寶自行入睡",
        "堅持固定的作息時間",
        "給予適度的安撫但不抱起",
        "保持堅定但溫和的態度"
      ],
      tips: "可以用白噪音或安撫玩具輔助",
      warning: "過程中寶寶可能會哭鬧，要有心理準備"
    },
    {
      title: "環境優化建議",
      icon: <Sun className="w-6 h-6" />,
      items: [
        "室溫維持在24-26度",
        "使用遮光窗簾控制光線",
        "選擇合適的床墊和寢具",
        "預防噪音干擾",
        "白天適度日照",
        "睡前2小時避免藍光"
      ],
      tips: "可以使用小夜燈，避免完全黑暗",
      warning: "不同季節要適時調整溫度和衣物"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 grid gap-6 md:grid-cols-2 grid-cols-1">
      {guides.map((guide, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="space-y-1 bg-gray-50">
            <div className="flex items-center space-x-2">
              {guide.icon}
              <CardTitle className="text-xl font-bold">{guide.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="space-y-4">
              <ul className="space-y-2">
                {guide.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t">
                <p className="text-sm text-green-600">
                  <strong>小技巧：</strong> {guide.tips}
                </p>
                <p className="text-sm text-orange-600 mt-2">
                  <strong>注意：</strong> {guide.warning}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};