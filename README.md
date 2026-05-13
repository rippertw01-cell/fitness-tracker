# 體適能測試記錄系統 (Fitness Tracker)

## 📱 項目概述

一個完整的體適能測試成績記錄和分析系統，幫助用戶追蹤和改進六項體適能指標。

### 支持的測試項目
- ✅ 100公尺短跑
- ✅ 60公尺短跑  
- ✅ 800公尺長跑
- ✅ 仰臥捲腹 (腹肌耐力)
- ✅ 坐姿體前彎 (柔軟度)
- ✅ 立定跳遠 (爆發力)

## 🎯 核心功能

### 用戶管理
- 用戶註冊與登入 (JWT認證)
- 個人資料管理 (身高、體重、性別等)
- 安全的密碼存儲

### 測試記錄
- 快速新增測試成績
- 查詢歷史記錄
- 按日期/項目篩選
- 刪除/編輯記錄

### 統計分析
- 個人最佳/最差成績
- 平均值、中位數、標準差
- 趨勢分析 (改進/穩定/下降)
- 進度圖表展示
- 周/月/年統計視圖

## 🛠️ 技術棧

### 前端 (Frontend)
- **React 18** - UI框架
- **React Router** - 路由管理
- **Axios** - API通信
- **Recharts** - 數據圖表
- **Tailwind CSS** - 樣式設計
- **React Hooks** - 狀態管理

### 後端 (Backend)
- **Node.js** - 運行時環境
- **Express.js** - Web框架
- **MongoDB** - NoSQL數據庫
- **Mongoose** - ODM工具
- **JWT** - 身份認證
- **bcryptjs** - 密碼加密

## 🚀 快速開始

### 前置要求
- Node.js (v16 或以上)
- MongoDB (本地或雲端)
- npm 或 yarn

### 後端設置
```bash
cd backend
npm install
cp .env.example .env
# 編輯 .env，設置MongoDB連接
npm run dev
```

### 前端設置
```bash
cd frontend
npm install
npm run dev
```

訪問 `http://localhost:5173` 開始使用！

## 📂 項目結構

```
fitness-tracker/
├── frontend/                    # React應用
│   ├── src/
│   │   ├── components/         # 可復用組件
│   │   ├── services/           # API服務
│   │   ├── context/            # 全局狀態
│   │   └── main.jsx
│   └── vite.config.js
│
├── backend/                     # Node.js應用
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── db/
│   ├── server.js
│   └── .env.example
│
└── docs/
```

## 📊 核心特性

- ✅ JWT Token認證
- ✅ 數據加密存儲
- ✅ 自動統計計算
- ✅ 趨勢分析
- ✅ 數據可視化
- ✅ 響應式設計
