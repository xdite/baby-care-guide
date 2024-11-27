import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Shield, Lightbulb, CheckCircle } from 'lucide-react';

export const FeedingGuide: React.FC = () => {
  const guides = [
    {
      title: "餵奶前準備工作（5分鐘）",
      icon: <Clock className="w-6 h-6" />,
      steps: [
        "提前15分鐘準備溫水",
        "一次準備2-3個奶瓶",
        "檢查所需物品是否齊全",
        "調整餵奶環境和座位"
      ],
      tips: "準備期間可以換尿布，讓寶寶更舒適",
      time_save: "良好準備可節省5-10分鐘"
    },
    {
      title: "高效餵奶方法（15-20分鐘）",
      icon: <Shield className="w-6 h-6" />,
      steps: [
        "使用U型枕支撐手臂",
        "確保奶嘴正確含入",
        "每5分鐘觀察一次吸吮狀況",
        "適時調整姿勢避免吸入空氣"
      ],
      tips: "選擇防脹氣奶瓶，可減少吸入空氣",
      time_save: "正確姿勢可減少餵奶時間10-15分鐘"
    },
    {
      title: "快速有效拍嗝（5-10分鐘）",
      icon: <Lightbulb className="w-6 h-6" />,
      steps: [
        "餵到一半先拍嗝5分鐘",
        "結束後直接抱起輕拍",
        "配合輕輕按摩背部",
        "觀察是否需要繼續"
      ],
      tips: "拍嗝時可以同時輕搖，提高效率",
      time_save: "正確拍嗝技巧可節省10-15分鐘"
    },
    {
      title: "常見問題解決方案",
      icon: <CheckCircle className="w-6 h-6" />,
      steps: [
        "吸吮不順：檢查奶嘴大小是否合適",
        "頻繁嗆奶：降低奶瓶傾斜角度",
        "拍不出嗝：嘗試不同拍嗝姿勢",
        "餵奶時間過長：檢查奶孔是否太小"
      ],
      tips: "記錄寶寶反應，找出最適合的方式",
      time_save: "解決問題後可大幅縮短餵奶時間"
    }
  ];

  return (
    <div id="feeding" className="w-full max-w-6xl mx-auto p-4 grid gap-6 md:grid-cols-2 grid-cols-1">
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
              <div>
                <h4 className="font-semibold mb-2">具體步驟：</h4>
                <ul className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-500">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t">
                <p className="text-sm text-green-600">
                  <strong>小技巧：</strong> {guide.tips}
                </p>
                <p className="text-sm text-orange-600 mt-2">
                  <strong>時間效益：</strong> {guide.time_save}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};