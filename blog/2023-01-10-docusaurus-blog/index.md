---
title: 博客搭建过程 # dsadas
description: 记录一下本博客搭建的过程
# slug: welcome-docusaurus-v2
authors: [crisri]
tags: [博客]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

本文主要描写此网站搭建起来的过程

<!--truncate-->

使用软路由的时候 突发奇想想打造一个自己的静态文件站点 ,创建一套属于自己的写作流

更好的推动自己的写作动力

本网站采用 Docusaurus 搭建 , 所以先要学习一下其中的概念

框架采用 classic 经典模式 该插件 [@docusaurus/preset-classic](https://docusaurus.io/zh-CN/docs/using-plugins#using-presets)

pages 文件夹 里面存放页面 可以写 j(t)sx 也可以写 md(x)

docs 文件夹 放成体系的文档记录

blog 文件夹根据时间存放 零散知识点

接下来的文章 着手于学习如何快速的输出文章 ,不要执着于学习项目本身的配置, 毕竟我配置过十几种 blog 站点但最后都没有坚持下去 , 学习最小的配置最快速度的输出文章 得到正向反馈才有可持续的驱动力

## 基础的 md 语法及扩充的 mdx 语法

```md
### 我的文档章节

一些文本，包括**粗体**、_斜体_，和[链接](/)

![图片 alt 文本](/img/docusaurus.png)

> dasdsa
```

- 内置的 React 组件的使用

```html
<details>
  <summary>点我！</summary>
  <div>
    <div>这是详情内容</div>
    <br />
    <details>
      <summary>嵌套的下拉栏！ 内含惊喜……</summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>
```
<details>
  <summary>点我！</summary>
  <div>
    <div>这是详情内容</div>
    <br/>
    <details>
      <summary>
        嵌套的下拉栏！ 内含惊喜……
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

## 可以直接在 mdx 导出 jsx 组件使用

```md
export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus 绿</Highlight> 和 <Highlight color="#1877F2">Facebook 蓝</Highlight> 是我最喜欢的颜色。

我可以把我的 _JSX_ 和 **Markdown** 写在一起！
```

## 代码块

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>你好，{props.name}</h1>;
}
```

:::tip 代码高亮配置

代码块的语法高亮配置

采用默认 

- light github 主题

- dark Dracula 主题

语法高亮使用 prismjs 实现 可以在配置文件配置支持的语法 

:::

## 告示 

```
:::note

Some **content** with _Markdown_ `syntax`. 看看[这个 `api`](#)。

:::  

```
import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';


:::caution  后面是各个类型(note | tip | info | caution | danger)

Some **content** with _Markdown_ `syntax`. 看看[这个 `api`](#)。

这里面也能使用 mdx

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>
:::  


## 待补充

git flow 推送自动push到各个主流媒体网站 (掘金, 知乎)

ci/cd 自动部署 vercel