import { Baby, Utensils, ThermometerSnowflake, Heart, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface BabySignal {
  title: string;
  icon: LucideIcon;
  signs: string[];
  timing: string;
  key_diff: string;
  warning: string;
}

export const babySignals: BabySignal[] = [
  {
    title: "餓了的訊號",
    icon: Utensils,
    signs: [
      "吸吮手指或拳頭",
      "張望或轉頭找尋（吸吮反射）",
      "發出「eh、eh」的短促聲音",
      "舔嘴唇、咂嘴"
    ],
    timing: "通常在上次餵食2-3小時後出現",
    key_diff: "餓了的哭聲較有規律，會越哭越大聲",
    warning: "等到哭鬧才餵可能較難安撫，建議看到早期訊號就先準備"
  },
  {
    title: "想被抱的訊號",
    icon: Heart,
    signs: [
      "眼神追隨大人移動",
      "手腳不自主揮動",
      "發出輕柔的咕咕聲",
      "哭聲較輕柔，像在撒嬌"
    ],
    timing: "常在剛睡醒或玩累時出現",
    key_diff: "抱起後很快就能安靜下來",
    warning: "不要擔心寶寶會被寵壞，適時的安撫有助於建立安全感"
  },
  {
    title: "大小便的訊號",
    icon: Baby,
    signs: [
      "突然間安靜專注",
      "臉部表情緊繃",
      "身體會稍微僵硬",
      "小便後會有明顯不適"
    ],
    timing: "通常在餵奶後30分鐘內較頻繁",
    key_diff: "處理後很快恢復平靜",
    warning: "定時更換尿布，避免皮膚問題"
  },
  {
    title: "冷熱不適的訊號",
    icon: ThermometerSnowflake,
    signs: [
      "手腳發涼或過熱",
      "頸部出汗",
      "哭聲較為急促",
      "身體扭動不安"
    ],
    timing: "環境溫度改變時要特別注意",
    key_diff: "調整衣物或溫度後會逐漸平靜",
    warning: "注意保持室溫在24-26度之間"
  },
  {
    title: "需要注意的警訊",
    icon: AlertTriangle,
    signs: [
      "持續高分貝哭叫",
      "明顯的煩躁不安",
      "臉色發白或發紺",
      "體溫異常升高或降低"
    ],
    timing: "任何時候出現都需要警覺",
    key_diff: "一般安撫方式無法平復",
    warning: "如果出現這些狀況，建議立即就醫"
  }
];