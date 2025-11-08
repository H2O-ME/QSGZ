<div align="center">
  <img src="./static/image/logob.webp" alt="淄博齐盛高级中学" width="200">
  <h1>淄博齐盛高级中学官网</h1>
  <p>现代化、响应式的学校官方网站，展示学校风采，提供信息服务</p>
  
  [![GitHub stars](https://img.shields.io/github/stars/H2O-ME/QSGZ?style=social)](https://github.com/H2O-ME/QSGZ/stargazers)
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
├── tools/                        # 构建工具和脚本 (build.js, clean.js)
├── package.json                  # Node.js项目配置
├── README.md                     # 项目说明
├── .gitignore                    # Git忽略文件
├── robots.txt                    # 搜索引擎爬虫配置
└── sitemap.xml                   # 网站地图
```

## 🎨 首页自定义指南

### 1. 基本信息修改
打开 `src/pages/index.html` 文件，找到以下部分进行自定义：

```html
<!-- SEO Meta Tags -->
<title>淄博齐盛高级中学 - 淄博实验中学集团成员校 | 现代化优质高中</title>

<meta name="title" content="淄博齐盛高级中学 - 淄博实验中学集团成员校 | 现代化优质高中">
<meta name="description" content="淄博齐盛高级中学，2021年秋季启用的现代化公办高中，位于张店区鲁泰大道469号。作为淄博实验中学核心校集团成员，实施紧密型集团化办学模式，拥有164名教职工，致力于培养德智体美劳全面发展的优秀人才。">
```

### 2. 导航菜单修改
在 `index.html` 中找到导航栏部分：

```html
<nav class="main-nav" role="navigation">
    <div class="container">
        <ul>
            <li><a href="/" class="nav-link" aria-label="返回首页">首页</a></li>
            <li><a href="/about" class="nav-link" data-modal="intro">学校简介</a></li>
            <li><a href="/profile" class="nav-link" data-modal="info">学校概况</a></li>
            <li><a href="/leadership" class="nav-link" data-modal="leadership">学校领导</a></li>
            <li><a href="/teachers" class="nav-link" data-modal="teachers">师资队伍</a></li>
            <li><a href="/student" class="nav-link" data-modal="students">学生发展</a></li>
            <li><a href="/features" class="nav-link" data-modal="features">办学特色</a></li>
            <li><a href="/admission" class="nav-link" data-modal="admission">招生简章</a></li>
        </ul>
    </div>
</nav>
```

### 3. 新闻内容更新
在 `index.html` 中找到新闻部分：

```html
<section class="news">
    <div class="container">
        <div class="news-grid">
            <div class="news-image">
                <img src="/assets/image/8.webp" alt="校园新闻" class="news-banner">
            </div>
            <div class="news-content">
                <div class="news-tabs">
                    <div class="tab active">学校新闻</div>
                    <div class="tab">通知公告</div>
                </div>
                <div class="news-list-container">
                    <ul class="news-list">
                        <li><a href="#" class="news-link" data-modal="news1">新闻标题1</a></li>
                        <li><a href="#" class="news-link" data-modal="news2">新闻标题2</a></li>
                        <!-- 更多新闻项 -->
                    </ul>
                </div>
            </div>
        </div>
    </section>
```

### 4. 模态框内容修改
每个导航项对应一个模态框，内容在对应的 `<div class="modal" id="modal-id">` 中。例如：

```html
<div class="modal" id="intro-modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>学校简介</h2>
        <div class="modal-text">
            <!-- 学校简介内容 -->
        </div>
    </div>
</div>
```

### 5. 页脚信息更新
在页面底部找到页脚部分：

```html
<footer class="site-footer">
    <div class="container">
        <div class="footer-logo">
            <img src="/assets/image/13.gif" alt="齐盛高中 Logo 动画" class="footer-logo-img">
        </div>
        <div class="copyright">
            <p>学校咨询电话：3180577,3189080,3180566 | 学校微信公众号：淄博齐盛高级中学</p>
        </div>
    </div>
</footer>
```

### 6. 图片资源替换
将新的图片放入 `src/assets/image/` 目录，然后更新相应的 `src` 属性。例如：

```html
<img src="/assets/image/new-image.webp" alt="新图片描述">
```

### 7. 结构化数据更新
在 `index.html` 中找到 Schema.org 结构化数据部分，更新学校信息：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "淄博齐盛高级中学",
  // 更新其他字段...
}
</script>
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
