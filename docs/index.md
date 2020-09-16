---
title: 介绍
order: 1
---

# Bici Design

`bicid` 是基于博智云创 PC 端设计规范的 React UI 组件库，主要用于支撑博智云创大量的企业级中后台产品。

## ✨ 特性

- 🌈 提炼自博智云创大量的中后台产品的交互语言和视觉风格。

- 📦 开箱即用的高质量 React 组件。

- 🛡 基于蚂蚁金服 UI 库 Ant Design，高效稳定。

- ⚙️ 全链路开发和设计工具体系，可搭配脚手架工具。

- 🎨 内置博智设计规范中常用的属性 CSS。

## 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://www.npmjs.com/package/react-app-polyfill)）。
- 支持服务端渲染。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --- | --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 安装

### 推荐使用 nrm 和 nvm

推荐使用 [nrm](https://github.com/Pana/nrm) 管理 npm 源，支持命令一键快捷查看，添加和切换源

```bash
# 查看所有源
nrm ls

# 一键切换源
npm use taobao
```

推荐使用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node 版本

```bash
# 查看可用的 Node 版本
nvm ls

# 一键切换 Node 版本
nvm use 11.6.0
```

### 推荐使用 npm 或 yarn 安装

推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install bicid --save
```

```bash
$ yarn add bicid
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 示例

```js
import { BiciTable } from 'bicid';

ReactDOM.render(<BiciTable />, mountNode);
```
