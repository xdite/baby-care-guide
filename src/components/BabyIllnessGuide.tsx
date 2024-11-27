import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Stethoscope, Shield, AlertTriangle } from 'lucide-react';

export const BabyIllnessGuide: React.FC = () => {
  const illnesses = [
    {
      title: "感冒發燒",
      icon: <Thermometer className="w-6 h-6" />,
      symptoms: [
        "發燒（體溫超過38度）",
        "流鼻水、鼻塞",
        "咳嗽、打噴嚏",
        "食慾減退",
        "精神不佳",
        "睡眠品質差"
      ],
      care: [
        "保持室內通風",
        "適時使用退燒藥",
        "多補充水分",
        "觀察呼吸狀況",
        "保持鼻腔清潔"
      ],
      warning: "若高燒持續、呼吸急促要立即就醫"
    },
    {
      title: "腸胃問題",
      icon: <Stethoscope className="w-6 h-6" />,
      symptoms: [
        "腹瀉（一天超過6次）",
        "嘔吐",
        "腹部脹氣",
        "食慾不振",
        "煩躁不安",
        "尿量減少"
      ],
      care: [
        "持續少量餵食",
        "補充電解質",
        "觀察大便性狀",
        "保持臀部清潔",
        "觀察脫水徵象"
      ],
      warning: "若出現嚴重脫水或血便要立即就醫"
    },
    {
      title: "呼吸道感染",
      icon: <Shield className="w-6 h-6" />,
      symptoms: [
        "呼吸急促",
        "鼻翼煽動",
        "胸部凹陷",
        "咳嗽加重",
        "吃奶費力",
        "體溫升高"
      ],
      care: [
        "抬高床頭",
        "保持呼吸道通暢",
        "霧化治療（依醫囑）",
        "觀察呼吸頻率",
        "維持濕度適中"
      ],
      warning: "若有呼吸困難或發紺要立即就醫"
    },
    {
      title: "皮膚問題",
      icon: <AlertTriangle className="w-6 h-6" />,
      symptoms: [
        "紅疹",
        "濕疹",
        "尿布疹",
        "皮膚乾燥",
        "異常出汗",
        "皮膚發熱"
      ],
      care: [
        "保持皮膚清潔乾燥",
        "適時塗抹護膚霜",
        "避免過度清潔",
        "選用溫和產品",
        "注意環境溫濕度"
      ],
      warning: "若皮疹擴散或出現水泡要就醫"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 grid gap-6 md:grid-cols-2 grid-cols-1">
      {illnesses.map((illness, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="space-y-1 bg-gray-50">
            <div className="flex items-center space-x-2">
              {illness.icon}
              <CardTitle className="text-xl font-bold">{illness.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">主要症狀：</h4>
                <ul className="space-y-2">
                  {illness.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">照護方法：</h4>
                <ul className="space-y-2">
                  {illness.care.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t">
                <p className="text-sm text-orange-600">
                  <strong>警示症狀：</strong> {illness.warning}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};