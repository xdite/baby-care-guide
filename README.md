# 寶寶照護指南 (Baby Care Guide)

這是一個使用 React + TypeScript 開發的寶寶照護指南網站，旨在幫助新手父母更好地了解和照顧寶寶。

## 功能特點

- 📱 響應式設計，支援各種設備
- 🎨 現代化 UI 設計，使用 Tailwind CSS
- 💡 清晰的分類導航
- 🔍 詳細的照護指南
- 🌐 完整的中文支援

### 主要功能模組

1. **寶寶訊號解讀**
   - 哭鬧訊號識別
   - 行為表現解讀
   - 及時回應建議

2. **餵奶指南**
   - 餵奶時間規劃
   - 正確姿勢指導
   - 常見問題解決

3. **換尿布指南**
   - 步驟說明
   - 注意事項
   - 問題處理

4. **洗澡指南**
   - 安全準備事項
   - 步驟說明
   - 注意事項

5. **睡眠訓練**
   - 睡眠時間規劃
   - 入睡儀式建立
   - 環境優化建議

6. **安撫指南**
   - 各種安撫方法
   - 情緒處理技巧
   - 建立安全感

7. **疾病照護**
   - 常見症狀識別
   - 基礎照護方法
   - 就醫建議

8. **發展里程碑**
   - 各年齡段發展指標
   - 觀察重點
   - 促進發展建議

## 技術棧

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Lucide Icons
- Vite

## 安裝與運行

### 環境需求

- Node.js 16.0 或以上版本
- npm 7.0 或以上版本

### 安裝步驟

1. 克隆專案
```bash
git clone https://github.com/xdite/baby-care-guide.git
cd baby-care-guide
```

2. 安裝依賴
```bash
npm install
```

3. 啟動開發伺服器
```bash
npm run dev
```

4. 開啟瀏覽器訪問 `http://localhost:5173`

### 生產環境部署

1. 建置專案
```bash
npm run build
```

2. 生產環境檔案會產生在 `dist` 目錄下

## 專案結構

```
src/
├── components/        # 可重用元件
│   ├── ui/           # UI 基礎元件
│   └── ...          # 功能元件
├── pages/            # 頁面元件
├── data/             # 靜態資料
├── lib/              # 工具函數
├── App.tsx           # 主應用元件
└── main.tsx          # 應用入口
```

## 開發指南

### 程式碼風格

- 使用 TypeScript 強型別
- 遵循 React 最佳實踐
- 使用 Tailwind CSS 進行樣式設計
- 元件採用函數式編程

### 提交規範

提交訊息格式：
```
<type>: <description>

[optional body]
```

Type 類型：
- feat: 新功能
- fix: 錯誤修復
- docs: 文檔更新
- style: 程式碼格式調整
- refactor: 重構
- test: 測試相關
- chore: 建置/工具相關

## 貢獻指南

1. Fork 專案
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 授權協議

本專案採用 MIT 授權協議 - 詳見 [LICENSE](LICENSE) 文件

## 聯絡方式

- 作者：xdite

## 致謝

感謝所有為這個專案做出貢獻的開發者和使用者。

---

Made with ❤️ for new parents