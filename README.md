<div align="center">
  <img src="https://qsgz.thw.lol/static/image/%E7%8F%AD%E7%BA%A7.jpg" alt="淄博齐盛高级中学" width="200">
  <h1>淄博齐盛高级中学网站</h1>
  <p>学生自制的现代化的学校网站</p>
  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
  [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/H2O-ME/qsgz)
</div>



## ✨ 项目亮点

- 🎨 现代化UI设计，优秀的动画ui设计
- ⚡ 高性能前端实现，优化用户体验
- 🎓 高仿的专业学校信息展示页面
- 🎯 集成SEO优化，提升搜索引擎可见性

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

### 系统集成
* **Microsoft Clarity**：用户分析和行为跟踪
* **720yun VR服务**：沉浸式校园游览体验
* **哔哩哔哩**：校园展示嵌入式视频内容
* **Google 字体**：排版增强
## 部署

[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2FH2O-ME%2Fqsgz.thw.lol)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FH2O-ME%2Fqsgz.thw.lol.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FH2O-ME%2Fqsgz.thw.lol?ref=badge_shield)



### 📝 使用说明

1. 点击上方的EdgeOne Pages即可一键克隆+部署
2. 使用现代浏览器打开EdgeOne临时链接即可查看网站
3. 根据需求修改 `index.html` 中的内容，看完下面的内容可以帮助你快速学会修改网站的内容
4. 更新你的静态资源到 `static` 目录下
5. 更新你的Github仓库，触发EdgeOne Pages自动部署
6. 绑定你的自定义域名


## 开发
### 开发环境

作为纯前端应用，只需要最少的设置。可以使用任何现代 Web 浏览器和基本文件服务功能立即开始开发。

### 所需工具

* 现代网络浏览器（Chrome、Firefox、Safari、Edge）
* 文本编辑器或 IDE（推荐 Visual Studio Code）
* 用于版本控制的 Git
* 本地 Web 服务器（可选，但推荐）

### 开始

1. 克隆存储库
2. 在现代浏览器中打开 `index.html`
3. 对于使用实时重新加载的开发，请通过本地 Web 服务器提供文件
### 核心组件

| 元件 | File | 目的 |
| --- | --- | --- |
| 主网站 | `index.html` | 网站总框架 |
| 录取通知书生成器 | `admission_notice.html` | 独立的录取通知书创建工具 |
| 样式管理 | `style.css`, `globle.css` | 响应式设计和 UI 框架 |
| JS代码 | `app.min.js` | UI 管理和交互功能 |
| 静态资源 | `static/image/*` | 媒体内容和视觉资源 |
| SEO 配置 | `robots.txt`,`sitemap.xml` | 搜索引擎优化和内容发现 |
<img width="1683" height="311" alt="image" src="https://github.com/user-attachments/assets/ad3e80e8-be1e-476c-9bce-7320b5e17644" />



### 主HTML结构
主网站使用具有基于模态的内容架构的 index.html 实现为单页应用程序。所有内容部分都嵌入为隐藏的模式容器，并通过 JavaScript 交互动态显示。
<img width="1798" height="215" alt="image" src="https://github.com/user-attachments/assets/a7ba31ea-8b49-4ee2-91de-8a664c2437a7" />
### JavaScript 组件架构
<img width="1655" height="792" alt="image" src="https://github.com/user-attachments/assets/c52f7b9b-6f14-4040-8fbf-0dfece331571" />

### 模态系统架构
内容交付机制使用了复杂的模态框系统，菜单导航链接触发的是隐藏内容容器的显示，而不是传统的页面导航。
<img width="1696" height="346" alt="image" src="https://github.com/user-attachments/assets/2f517933-bf86-4a87-991e-7a5c10f5c6b8" />
模态系统使用 CSS 和 JavaScript 的组合来实现流畅的交互：
* **CSS 类** ：.modal-container、.modal、.modal-content、.modal-open
* **JavaScript 函数** ：showModal（）， 关闭作的事件处理程序
* **动画** ：具有 transform 和 opacity 属性的 CSS 过渡

### 关键修改点

| 元件 | 文件位置 | 线 | 描述 |
| --- | --- | --- | --- |
| 网站通知 | `index.html` | 147-157 | 欢迎弹窗内容 |
| 导航 | `index.html` | 160-173 | 主要导航链接 |
| 模态框 | `index.html` | 175-332 | 学校信息模式 |
| 新闻版块 | `index.html` | 367-527 | 新闻文章和公告 |
| 校园风光 | `index.html` | 775-815 | 照片库内容 |
| 页脚 | `index.html` | 819-828 | 联系信息 |



### 弹窗信息自定义
打开 `index.html` 文件，找到以下部分进行文字自定义：

```html
    <!-- 这是弹窗 -->
    <div class="site-notice" id="siteNotice">
        <div class="notice-content">
            <h2>⚠手机端访问一定要打开浏览器设置里的电脑模式！</h2>
            <div class="notice-text">
                <p>淄博齐盛高级中学录取通知书生成器(BATE)</p>
                <p>可下载，自定义名字</p>
            </div>
            <div class="notice-btn-container">
                <button type="button" class="notice-btn notice-btn-primary" onclick="window.location.href='admission_notice.html'">生成通知书</button>
                <button type="button" class="notice-btn" id="closeNotice" onclick="closeNotice()">关闭</button>
            </div>
        </div>
    </div>
```

### 导航栏标题信息自定义

在 `index.html` 中定位到导航栏部分：
#### 导航链接配置

| 导航项 | 数据模态属性 | 目标模态 ID |
| --- | --- | --- |
| 学校简介 | `data-modal="intro"` | `intro-modal` |
| 学校概况 | `data-modal="info"` | `info-modal` |
| 学校领导 | `data-modal="leadership"` | `leadership-modal` |
| 师资队伍 | `data-modal="teachers"` | `teachers-modal` |
| 学生发展 | `data-modal="students"` | `students-modal` |
| 办学特色 | `data-modal="features"` | `features-modal` |
| 招生信息 | `data-modal="admission"` | `admission-modal` |
```html
    <!-- 导航栏 -->
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

### 导航栏窗口内容自定义
在 `index.html` 中导航栏部分下方即是，按需修改，格式：

```html
<div class="modal-container">
        <div class="modal" id="intro-modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>学校简介</h2>
                <div class="modal-text">
                    <p>淄博齐盛高级中学位于鲁泰大道以北，天津路以东，是2018年由市委市政府批准建设的公办普通高级中学，学校占地132亩，建筑面积68768平方米，各项设施配备全市一流。2021年秋季学期，学校正式投入使用。</p>
                    <div class="gallery-item">
                        <div class="video-container">
                            <iframe src="//www.bilibili.com/blackboard/html5mobileplayer.html?aid=675590858&bvid=BV1TU4y1A72t&cid=410440401&p=1&danmaku=0&autoplay=1&hideDanmakuButton=1&noFullScreenButton=1&fjw=0&muted=1" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
                        </div>
                    </div>
                    <p>根据市教育局实施集团化办学改革精神，以淄博实验中学为核心校，淄博齐盛高级中学为成员校，进行紧密型集团化办学模式试点。淄博实验中学将淄博齐盛高级中学的建设、发展纳入三年发展规划，实行紧密型管理，实现人财物统筹互补和优质教育资源共享共用，形成集团内学校相互激励、相互促进、共同发展的格局，逐步把淄博齐盛高级中学建设成为全市一流、走在全省乃至全国前列的新型高中学校。</p>
                    <p>目前，两校管理干部和教师已实现互派交流，两校教育教学已实现共同教研、共同备课、同步检测、同步阅卷、同步分析，两校学生已实现学习、社团活动、主题德育活动等资源同步。</p>
                    <p>两校的集团化办学将会持续下去，会更加紧密！</p>
                    <p>建校以来，学校先后获得省级绿色学校、市级无烟学校、区级文明校园、市中小学学生公寓A级单位、百佳青春团队、区级文明校园、市级特色高中学校等荣誉。</p>
                </div>
            </div>
        </div>
```

### 新闻标题与首页展示图片自定义
<img width="1578" height="779" alt="image" src="https://github.com/user-attachments/assets/fd0c345b-2301-4f5a-a1d8-4d67517a2219" />

修改文字与资源依赖：

```html
<div class="modal" id="news1-modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>淄博齐盛高中2025级高一新生分班结果查询</h2>
                <div class="modal-text">
                    <p>亲爱的2025级新生：         
                    <p>    欢迎你们！淄博齐盛高中2025级分班信息查询系统已经开放，请按学校要求于7月15日上午到学校报到。可通过以下网址进行分班查询：https://query.vzibo.net/query/type/c2ec82ae8ba1b88841289c72705b41ed.html</p>
                    <p class="news-date">发布时间：2025-07-13</p>
                </div>
            </div>
        </div>
```


### 新闻内容自定义
以第一条新闻为例：

```html
<div class="modal" id="news1-modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>淄博齐盛高中2025级高一新生分班结果查询</h2>
                <div class="modal-text">
                    <p>亲爱的2025级新生：         
                    <p>    欢迎你们！淄博齐盛高中2025级分班信息查询系统已经开放，请按学校要求于7月15日上午到学校报到。可通过以下网址进行分班查询：https://query.vzibo.net/query/type/c2ec82ae8ba1b88841289c72705b41ed.html</p>
                    <p class="news-date">发布时间：2025-07-13</p>
                </div>
            </div>
        </div>
```

### 校园风光图片自定义
```html
    <!-- 校园风光页 -->
    <section class="campus-section">
        <div class="container">
            <h2 class="section-title">校园风光</h2>
            <meta name="keywords" content="淄博齐盛高级中学,校园环境,教学设施,校园风光">
            <div class="campus-gallery">
                <!-- 图片1 -->
                <div class="gallery-item">
                    <img src="./static/image/1.JPG" alt="校园风光1" class="gallery-image">
                </div>

                <!-- 图片2 -->
                <div class="gallery-item">
                    <img src="./static/image/2.JPG" alt="校园风光2" class="gallery-image">
                </div>

                <!-- 图片3 -->
                <div class="gallery-item">
                    <img src="./static/image/3.JPG" alt="校园风光3" class="gallery-image">
                </div>

                <!-- 视频 -->
                <div class="gallery-item">
                    <div class="video-container">
                        <iframe src="//www.bilibili.com/blackboard/html5mobileplayer.html?aid=114755083705660&bvid=BV1RkK6zqEga&cid=25818111057&p=1&danmaku=0&autoplay=1&hideDanmakuButton=1&noFullScreenButton=1&fjw=0&muted=1" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
                    </div>
                </div>

                <!-- 懒得打了 -->
                <div class="gallery-item">
                    <img src="./static/image/5.JPG" alt="校园风光5" class="gallery-image">
                </div>
                <!-- 懒得打了 -->
                <div class="gallery-item">
                    <img src="./static/image/6.JPG" alt="校园风光6" class="gallery-image">
                </div>
            </div>
            <!-- 正是在下 -->
            <div class="shot-on-caption">
                photo by THW
            </div>
        </div>
    </section>
```


### 页脚内容自定义

```html
   <!-- 页脚 -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-logo">
                <img src="./static/image/13.gif" alt="齐盛高中 Logo 动画" class="footer-logo-img">
            </div>
            <div class="copyright">
                <p>学校咨询电话：3180577,3189080,3180566 | 学校微信公众号：淄博齐盛高级中学</p>
            </div>
        </div>
    </footer>

```


### 图片容器使用示例
```html
                <div class="gallery-item">
                    <img src="在这里填写资源路径" alt="别忘了写" class="gallery-image">
                </div>
```

### bilibili视频嵌入使用示例
```html
                <div class="gallery-item">
                    <div class="video-container">
                        <iframe src="//www.bilibili.com/blackboard/html5mobileplayer.html?aid=自定义&bvid=BV号&cid=这里也要改&p=1&danmaku=0&autoplay=1&hideDanmakuButton=1&noFullScreenButton=1&fjw=0&muted=1" frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
                    </div>
                </div>
```

## ❓︎ 问答
### 为什么做成纯前端网站？
答：在本项目中，采用纯前端实现，1是降低开发复杂度：完整的网站通常包含后端服务、数据库等组件，若要从零构建一个功能完备的后端系统，不仅需要大量时间进行架构设计和接口开发，还需考虑数据格式、安全性、性能优化等问题。2是对于学生而言，云服务器费用过高。而纯前端几乎为零的运维成本显然更合适，虽然纯前端项目在内容更新上不够灵活，但经过了一次大规模代码重构过后，目前直观模块化的html结构使得内容维护的门槛已经大大降低。
## 📄 许可证

本项目使用 [MIT](LICENSE) 授权。

---

<div align="center">
    <p>© 2025 THW 版权所有</p>
</div>


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FH2O-ME%2Fqsgz.thw.lol.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FH2O-ME%2Fqsgz.thw.lol?ref=badge_large)