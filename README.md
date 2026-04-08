# ✈️ 台湾 台北六日游行程

> **旅行日期：** 2026 年 5 月 7 日 – 5 月 12 日（六天五夜）

---

## 功能亮点

- **逐日行程时间轴** — Day 1–6，含景点、美食、交通细节
- **捷运路线图** — 台北捷运各线站点 + 景点 POI 索引
- **美食总览** — 按类别筛选（早餐 / 面食 / 甜点 / 夜市等）
- **实时倒计时** — 出发前显示剩余天数；旅途中高亮当日行程
- **深色模式** — 一键切换，跨浏览器 session 保留
- **PWA 支持** — 可安装到手机桌面，支持离线查看
- **打印友好** — 打印时展开所有天行程，隐藏 UI 控件
- **分享功能** — 一键复制当前 Tab 链接（URL hash 定位）

---

## 文件结构

```
taipei-itinerary-v13.html   主行程页面
manifest.json               PWA 应用清单
sw.js                       Service Worker（离线缓存）
README.md                   本文档
```

---

## 本地运行

直接用浏览器打开 `taipei-itinerary-v13.html` 即可。

> **注意：** PWA 和 Service Worker 功能需要通过 HTTP(S) 服务器访问才能生效。本地直接双击打开（`file://` 协议）时 SW 不会注册，但其他功能正常。

---

## 部署到 GitHub Pages

1. 进入仓库 **Settings → Pages**
2. Source 选 `Deploy from a branch` → `main` → `/ (root)`
3. 保存后等约 1 分钟，访问：`https://<你的用户名>.github.io/Taiwan-travel/taipei-itinerary-v13.html`
4. 部署完成后，手机浏览器访问该链接，可选择"添加到主屏幕"安装为 App

---

## Tab 链接定位

每个 Tab 对应一个 URL hash，可以直接分享带 hash 的链接跳到对应天：

| Tab | Hash |
|-----|------|
| Day 1 | `#day1` |
| Day 2 | `#day2` |
| Day 3 | `#day3` |
| Day 4 | `#day4` |
| Day 5 | `#day5` |
| Day 6 | `#day6` |
| 总览 | `#overview` |
| 捷运路线 | `#mrt` |

---

*行程由 Claude (Cowork) 协助规划与开发*
