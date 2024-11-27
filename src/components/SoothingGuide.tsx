import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Music, Sun, AlertTriangle } from 'lucide-react';

export const SoothingGuide: React.FC = () => {
  const guides = [
    {
      title: "身體接觸安撫",
      icon: <Heart className="w-6 h-6" />,
      methods: [
        "緊密包裹（襁褓包巾）",
        "皮膚接觸（親膚哺育）",
        "輕柔撫摸背部",
        "胸貼胸擁抱",
        "溫柔搖晃（注意頭部）",
        "輕柔按摩"
      ],
      tips: "嘗試不同姿勢，找出寶寶最喜歡的方式",
      warning: "切記支撐頭部，避免過度搖晃"
    },
    {
      title: "聲音安撫技巧",
      icon: <Music className="w-6 h-6" />,
      methods: [
        "輕聲說話/唱歌",
        "重複柔和音節",
        "播放白噪音",
        "模仿子宮聲音",
        "輕哼搖籃曲",
        "錄製媽媽心跳聲"
      ],
      tips: "保持聲音溫柔且穩定",
      warning: "音量不要太大，避免驚嚇"
    },
    {
      title: "環境調整方法",
      icon: <Sun className="w-6 h-6" />,
      methods: [
        "調整室內溫度",
        "減少光線刺激",
        "降低環境噪音",
        "改變空間位置",
        "使用安撫物品",
        "營造熟悉氛圍"
      ],
      tips: "觀察環境因素對寶寶的影響",
      warning: "避免過度刺激的環境"
    },
    {
      title: "特殊情況處理",
      icon: <AlertTriangle className="w-6 h-6" />,
      methods: [
        "腸絞痛：順時針按摩腹部",
        "疲累：降低刺激、協助入睡",
        "過度刺激：轉移到安靜環境",
        "分離焦慮：漸進式短暫分離",
        "疫苗後：多加擁抱、觀察反應",
        "生病時：提供額外安撫"
      ],
      tips: "留意異常哭鬧的時間和頻率",
      warning: "若持續哭鬧超過2小時應就醫"
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
                {guide.methods.map((method, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{method}</span>
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