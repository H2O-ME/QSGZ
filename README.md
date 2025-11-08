<div align="center">
  <img src="./static/image/logob.png" alt="淄博齐盛高级中学" width="200">
  <h1>淄博齐盛高级中学官网</h1>
  <p>现代化、响应式的学校官方网站，展示学校风采，提供信息服务</p>
  
  [![GitHub stars](https://img.shields.io/github/stars/yourusername/ziboqishenghighschool?style=social)](https://github.com/yourusername/ziboqishenghighschool/stargazers)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
  ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
</div>

## ✨ 项目亮点

- 🎨 现代化UI设计，响应式布局，完美适配各种设备
- ⚡ 高性能前端实现，优化用户体验
- 🎓 专业的学校信息展示与管理系统
- 📱 移动端优先的设计理念
- 🎯 集成SEO优化，提升搜索引擎可见性

## 🏗️ 项目结构

```
zibo-qisheng-highschool/
├── src/                          # 源代码目录
│   ├── assets/                   # 静态资源
│   │   ├── css/                  # 样式文件
│   │   │   ├── style.css         # 主样式文件
│   │   │   └── admission_notice.css # 录取通知书样式
│   │   ├── js/                   # JavaScript文件
│   │   │   ├── main.js           # 主脚本
│   │   │   ├── app.min.js        # 应用脚本（压缩）
│   │   │   ├── jquery.min.js     # jQuery库
│   │   │   └── admission_notice.js # 录取通知书脚本
│   │   ├── images/               # 图片资源
│   │   │   ├── dy/               # 动态图片
│   │   │   └── [其他图片文件]    # 学校图片资源
│   │   └── fonts/                # 字体文件
│   ├── pages/                    # HTML页面
│   │   ├── index.html            # 首页
│   │   └── admission_notice.html # 录取通知书生成器
│   └── components/               # 可复用组件（预留）
├── dist/                         # 构建输出目录
├── config/                       # 配置文件目录
├── docs/                         # 项目文档
├── tools/                        # 构建工具和脚本
├── package.json                  # Node.js项目配置
├── README.md                     # 项目说明
├── .gitignore                    # Git忽略文件
├── robots.txt                    # 搜索引擎爬虫配置
└── sitemap.xml                   # 网站地图
```

## 🎨 首页自定义指南

### 1. 基本信息修改
打开 `index.html` 文件，找到以下部分进行自定义：

```html
<!-- 网站标题 -->
<title>淄博齐盛高级中学 - 淄博实验中学集团成员校</title>

<!-- 主要元描述 -->
<meta name="description" content="淄博齐盛高级中学，2021年秋季启用的现代化公办高中...">

<!-- 导航菜单 -->
<nav class="main-nav">
    <div class="container">
        <ul>
            <li><a href="/" class="nav-link">首页</a></li>
            <li><a href="/about" class="nav-link" data-modal="intro">学校简介</a></li>
            <!-- 其他导航项 -->
        </ul>
    </div>
</nav>
```

### 2. 轮播图修改
在 `index.html` 中定位到轮播图部分，更新图片路径和描述：

```html
<div class="slider">
    <div class="slide">
        <img src="./static/image/slide1.jpg" alt="校园风光">
        <div class="slide-content">
            <h3>欢迎来到淄博齐盛高级中学</h3>
            <p>追求卓越，成就未来</p>
        </div>
    </div>
    <!-- 添加更多幻灯片 -->
</div>
```

### 3. 新闻动态更新
在 `index.html` 中找到新闻部分，按需修改：

```html
<section class="news">
    <div class="container">
        <h2>新闻动态</h2>
        <div class="news-grid">
            <article class="news-item">
                <div class="news-date">2025-07-15</div>
                <h3><a href="#" class="news-link">2025年招生简章发布</a></h3>
                <p>我校2025年招生工作正式启动，欢迎优秀学子报考...</p>
            </article>
            <!-- 更多新闻项 -->
        </div>
    </div>
</section>
```

### 4. 联系方式更新
在页面底部找到联系方式部分进行修改：

```html
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>联系我们</h4>
                <p>地址：山东省淄博市张店区鲁泰大道469号</p>
                <p>电话：0533-12345678</p>
                <p>邮箱：info@zbqsgz.edu.cn</p>
            </div>
            <!-- 其他底部信息 -->
        </div>
    </div>
</footer>
```

## 🚀 特色功能

### 录取通知书生成器
- 动态生成个性化录取通知书
- 支持自定义学生姓名
- 一键下载高清晰度图片

### 响应式设计
- 完美适配桌面、平板和手机
- 智能调整布局和字体大小
- 触摸友好的交互元素

### 性能优化
- 图片懒加载
- 资源压缩
- 浏览器缓存策略

## � 快速开始

### 环境要求
- Node.js >= 14.0.0
- 现代浏览器（Chrome、Firefox、Safari、Edge）

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
启动开发服务器，自动打开浏览器访问 `http://localhost:3000`

### 构建项目
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```
在 `http://localhost:4000` 预览构建后的网站

## 📝 使用说明

1. **开发环境**：运行 `npm run dev` 启动开发服务器
2. **修改内容**：直接编辑 `src/pages/` 目录下的HTML文件
3. **添加资源**：将新的图片、CSS、JS文件放入对应的 `src/assets/` 子目录
4. **构建部署**：运行 `npm run build` 生成生产版本到 `dist/` 目录

## 📄 开源协议

本项目采用 [MIT](LICENSE) 开源协议

---

<div align="center">
    <p>© 2025 淄博齐盛高级中学 版权所有</p>
</div>
