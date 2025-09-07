# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 安裝環境
Lang : Nuxt3 <br/>
Node Version : v22 以上

```bash
# npm
npm install
npm run dev
```

Start the development server on `http://localhost:3000`:


## 部署到 AWS Lightsail Server

Build the application for production:<br>
Check <b>'deploy.sh'</b> first

```bash
# npm
npm run deploy
```

## 專案結構說明
- components 以原子設計方式放置元件
- components/pages 內元件放置頁面各別使用的元件
- SEO 文案放置在 server/content/seoWording.ts

## 動畫特效
- 使用 Lenis.js 控制滾動 smooth 效果
- GSAP 僅使用首頁第一個區塊淡入淡出
- 區塊淡入使用 PrimeVue 套件的淡入