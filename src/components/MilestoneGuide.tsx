import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Brain, MessageCircle, Heart } from 'lucide-react';

export const MilestoneGuide: React.FC = () => {
  const milestones = [
    {
      title: "大動作發展",
      icon: <Activity className="w-6 h-6" />,
      stages: [
        {
          month: "0-1個月",
          skills: [
            "俯臥時可短暫抬頭15度",
            "手腳有自然反射動作",
            "轉頭尋找聲音來源"
          ],
          stimulation: [
            "每天進行趴姿訓練",
            "適度活動手腳",
            "變換抱姿方向"
          ]
        },
        {
          month: "1-2個月",
          skills: [
            "俯臥可抬頭30-45度",
            "手腳動作更協調",
            "頭部穩定性增加"
          ]
        },
        {
          month: "2-3個月",
          skills: [
            "俯臥可抬頭90度",
            "手肘支撐抬胸",
            "躺著時頭部可以保持中線"
          ]
        }
      ]
    },
    {
      title: "小動作發展",
      icon: <Brain className="w-6 h-6" />,
      stages: [
        {
          month: "0-1個月",
          skills: [
            "握拳反射",
            "隨意揮動手腳",
            "被碰觸時有反應"
          ],
          stimulation: [
            "讓寶寶觸摸不同質地",
            "輕柔按摩手掌",
            "提供安全抓握玩具"
          ]
        },
        {
          month: "1-2個月",
          skills: [
            "開始張開手掌",
            "注視懸掛物品",
            "嘗試抓握物品"
          ]
        },
        {
          month: "2-3個月",
          skills: [
            "手掌可以完全張開",
            "嘗試抓取眼前物品",
            "雙手放在胸前玩耍"
          ]
        }
      ]
    },
    {
      title: "語言發展",
      icon: <MessageCircle className="w-6 h-6" />,
      stages: [
        {
          month: "0-1個月",
          skills: [
            "對突然聲音有反應",
            "發出簡單啊、噢聲",
            "哭聲有不同含義"
          ],
          stimulation: [
            "經常和寶寶說話",
            "唱歌或哼唱",
            "回應寶寶的發聲"
          ]
        },
        {
          month: "1-2個月",
          skills: [
            "發出咕咕聲",
            "對熟悉聲音有反應",
            "哭聲更有變化"
          ]
        },
        {
          month: "2-3個月",
          skills: [
            "開始咯咯笑",
            "發出更多元音",
            "對說話聲音有反應"
          ]
        }
      ]
    },
    {
      title: "社交情緒發展",
      icon: <Heart className="w-6 h-6" />,
      stages: [
        {
          month: "0-1個月",
          skills: [
            "注視人臉特別是眼睛",
            "對撫觸有反應",
            "被安撫後會平靜"
          ],
          stimulation: [
            "保持眼神接觸",
            "回應寶寶需求",
            "經常擁抱撫觸"
          ]
        },
        {
          month: "1-2個月",
          skills: [
            "開始出現社交性微笑",
            "對familiar臉孔有反應",
            "喜歡被注視互動"
          ]
        },
        {
          month: "2-3個月",
          skills: [
            "主動社交性微笑",
            "喜歡人際互動",
            "有簡單情緒表達"
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 grid gap-6 md:grid-cols-2 grid-cols-1">
      {milestones.map((milestone, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="space-y-1 bg-gray-50">
            <div className="flex items-center space-x-2">
              {milestone.icon}
              <CardTitle className="text-xl font-bold">{milestone.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="space-y-6">
              {milestone.stages.map((stage, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-semibold text-blue-600">{stage.month}</h4>
                  <ul className="space-y-2">
                    {stage.skills.map((skill, j) => (
                      <li key={j} className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  {stage.stimulation && (
                    <div className="mt-2">
                      <h5 className="font-semibold text-orange-600">建議刺激：</h5>
                      <ul className="space-y-1">
                        {stage.stimulation.map((stim, k) => (
                          <li key={k} className="flex items-start text-sm">
                            <span className="mr-2 text-orange-500">-</span>
                            <span>{stim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};