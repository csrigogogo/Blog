---
title: 快速书写博客 # dsadas
description: 记录一下本博客搭建的过程
# slug: welcome-docusaurus-v2
authors: [crisri]
tags: [博客]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

## 前言

本文主要记录如何使用 `Docusaurus` 快速的书写一篇文章


<!--truncate-->

使用软路由的时候 突发奇想想打造一个自己的静态blog站点 ,创建一套属于自己的写作流,更好的推动自己的写作

本网站采用 Docusaurus 搭建 , 所以先要学习一下其中的概念

框架采用 classic 经典模式 该插件 [@docusaurus/preset-classic](https://docusaurus.io/zh-CN/docs/using-plugins#using-presets)

- pages

> 存放页面 可以写 j(t)sx 也可以写 md(x) , pages 仅仅作为页面路由存在 侧边栏并不会生成对应的路由跳转

- docs 

> 成体系的文档记录 , 不成体系的知识是没有价值的 , 这里存放对某一个知识点的系统理解

- blog 

> 根据时间输出零散知识点博文

接下来的部分将着手于学习如何快速地输出文章 ,不要执着于学习项目本身的配置, 毕竟我配置过十几种 blog 站点但最后都没有坚持下去. 

学习最小的配置最快速度地输出文章 , 获取正向反馈才能得到可持续的驱动力

## 语法

### 基础的 md 语法及扩充的 mdx 语法

```md
### 我的文档章节

一些文本，包括**粗体**、_斜体_，和[链接](/)

![图片 alt 文本](/img/docusaurus.png)

> dasdsa
```

### 内置的 React 组件的使用

```html title="./a.mdx"
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

### 可以直接在 mdx 导出 jsx 组件使用

```md title="./a.mdx"
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
### 代码块

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  // highlight-start
  return <h1>你好，{props.name}</h1>;
  // highlight-end
}
```

:::tip 代码高亮配置

代码块的语法高亮配置

采用默认

- light github 主题

- dark Dracula 主题

语法高亮使用 prismjs 实现 可以在配置文件配置支持的语法

:::

<details>
  <summary>自定义的魔法字符串</summary>
  <div>
    <div>代码块中支持使用魔法字符串来高亮一些代码, 详细请见 <a href="https://docusaurus.io/docs/markdown-features/code-blocks#custom-magic-comments" target="__blank">魔法字符串</a></div>
    <br/>
  </div>
</details>

### 告示

```
:::note

Some **content** with _Markdown_ `syntax`. 看看[这个 `api`](#)。

:::

```

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::caution 后面是各个类型(note | tip | info | caution | danger)

Some **content** with _Markdown_ `syntax`. 看看[这个 `api`](#)。

这里面也能使用 mdx

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>
:::


## 部署

Docusaurus 的 部署文档写的很详细 链接奉上[Docusaurus 部署](https://docusaurus.io/zh-CN/docs/deployment)

主要部署 github-pages  和  vercel 的免费服务, 后面在考虑服务器的问题, 先把文章写起来.

### 部署平台

这里主要写一些部署到这两个平台的注意事项

- vercel 

vercel 没什么需要注意的 , 

github 安装 vercel 服务 , 再在 vercel 关联 github 仓库, 设置好 , 直接 push 到远程即可实现自动部署

- github-pages 

gh-pages的部署方式有几种, 后面看能不能写一篇博文来分别介绍

这里采用的 github-actions 触发 ci/cd 自动部署 详细可以去 [blog](https://github.com/csrigogogo/Blog/tree/master/.github/workflows) 查看

项目`.github/workflows` 里 配置了对应的 yml

deploy.yml 主要执行的逻辑是监听master 分支的 git push 动作, 当 push 动作发生后 

执行以下动作

1. 安装好环境  pnpm  node

2. 执行 pnpm install  |  pnpm build:gh-pages

3. 将./build 文件夹 推送到 gh-pages 的分支上 

:::tip

 如果没有此分支, 这里使用的 actions(`peaceiris/actions-gh-pages@v3`) 会通过 GITHUB_TOKEN 自行创建 所以需要提供权限  

 ```yaml 
    permissions: 
        content: write
 ```
并且创建通过下面提供的user_name , user_email 在 gh-pages 分支创建一个 github 用户的提交, 所以需要配置一下

:::

import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!/.github/workflows/deploy.yml';

<CodeBlock title=".github/workflows/deploy.yml" language="yml">{MyComponentSource}</CodeBlock>



## 结语

博客搭建完成仅仅只是一个开始, 接下来需要督促自己 , 需要定下一个周期一篇文章的番茄钟 , 或许先是一周, 两周

后续的文章更新应该都会通过这种方式

## 写给自己的话

好记性不如烂笔头

有些知识点不记录下来真得很容易遗忘, 而且没有知识沉淀如无根浮萍 

根基不稳迟早要出事, 始终记住`细节部分如果时间允许尽量详细` 

否则当你回顾自己写的文章时会骂自己的

就像隔一个月看自己的代码🤣