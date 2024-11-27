import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Droplets, AlertTriangle, Heart } from 'lucide-react';

export const DiaperChangeGuide: React.FC = () => {
  const guides = [
    {
      title: "必備用品清單",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        "尿布墊或換尿布專用墊",
        "乾淨尿布",
        "溫水與軟毛巾",
        "濕紙巾",
        "護臀霜",
        "備用衣物"
      ],
      tips: "建議準備多件替換用品，以免臨時不足",
      warning: "用品要放在手可以輕易拿到的位置"
    },
    {
      title: "清潔步驟要點",
      icon: <Droplets className="w-6 h-6" />,
      items: [
        "由前往後擦拭，避免感染",
        "確實清潔所有皺褶",
        "使用溫水而非過熱水",
        "輕柔但仔細地擦拭",
        "完全擦乾再抹護臀霜",
        "觀察皮膚狀況"
      ],
      tips: "每次換尿布都是檢查皮膚的好機會",
      warning: "清潔時永遠不要離開寶寶"
    },
    {
      title: "安全注意事項",
      icon: <AlertTriangle className="w-6 h-6" />,
      items: [
        "確保換尿布檯高度適中",
        "一手必須永遠扶著寶寶",
        "所有用品要先準備好",
        "避免讓寶寶接觸到尿布以外物品",
        "注意室內溫度適中",
        "動作要快但不要急躁"
      ],
      tips: "可以和寶寶說話分散注意力",
      warning: "即使是新生兒也可能突然翻身"
    },
    {
      title: "異常狀況處理",
      icon: <Heart className="w-6 h-6" />,
      items: [
        "發現紅疹：加強擦乾和透氣",
        "皮膚破損：諮詢醫師後用藥",
        "嚴重尿疹：增加更換頻率",
        "異常糞便：記錄顏色和性狀",
        "頻尿：觀察是否發燒",
        "便秘：適度按摩腹部"
      ],
      tips: "建立異常紀錄，方便就醫時說明",
      warning: "若狀況持續應及時就醫"
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