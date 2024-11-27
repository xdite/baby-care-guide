import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Droplets, AlertTriangle, ThermometerSun } from 'lucide-react';

export const BathGuide: React.FC = () => {
  const guides = [
    {
      title: "洗澡前準備",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        "浴盆、小臉盆",
        "嬰兒沐浴露、洗髮精",
        "2-3條小毛巾",
        "乾淨衣物、尿布",
        "嬰兒乳液或油",
        "溫度計",
        "防滑墊"
      ],
      tips: "所有用品要放在伸手可及的地方",
      warning: "室溫保持在26度左右，避免寶寶著涼"
    },
    {
      title: "安全要點",
      icon: <ThermometerSun className="w-6 h-6" />,
      items: [
        "水溫維持37-38度",
        "水深不超過寶寶胸部",
        "一手永遠扶著寶寶",
        "注意防滑",
        "檢查水溫要用手肘內側",
        "準備好保暖措施"
      ],
      tips: "可以播放寶寶喜歡的音樂增加樂趣",
      warning: "絕不能讓寶寶獨處，即使水很淺"
    },
    {
      title: "清洗步驟",
      icon: <Droplets className="w-6 h-6" />,
      items: [
        "先用溼毛巾擦臉，不用皂液",
        "從頭髮開始往下清洗",
        "特別注意頸部、腋下皺褶",
        "輕柔但仔細地清洗私密處",
        "最後清洗四肢和背部",
        "用清水徹底沖洗"
      ],
      tips: "可以邊洗邊和寶寶互動，建立愉快經驗",
      warning: "動作要輕柔，避免皂液進入眼睛"
    },
    {
      title: "特殊注意事項",
      icon: <AlertTriangle className="w-6 h-6" />,
      items: [
        "臍帶尚未脫落時避免沾濕",
        "頭部要特別注意保暖",
        "清洗耳後、頸部等皺褶",
        "男寶寶要注意包皮清潔",
        "女寶寶要注意由前往後擦拭",
        "觀察皮膚狀況"
      ],
      tips: "建立固定的洗澡時間，培養作息",
      warning: "若有異常紅疹要諮詢醫師"
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