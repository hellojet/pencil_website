# Fancy Pencil —— 外贸产品展示网站 PRD & 技术方案

> 文档版本：v1.1  
> 创建时间：2026-04-15  
> 更新时间：2026-04-15  
> 项目性质：外贸买家产品展示网站（非电商，以询盘为核心转化目标）

---

## 一、产品需求文档（PRD）

### 1.1 项目背景

**Fancy Pencil** 是一个面向海外 B2B 买家的绘画笔类产品展示网站，产品来源于 **ANHUI BB-FOX STATIONERY CO., LTD.**（安徽狐宝文具有限公司）2026 年产品画册，涵盖丙烯马克笔、颜料棒、软头笔、荧光笔等多个系列，共约 **100+ 款 SKU**。

网站核心目标：让海外买家快速浏览产品、了解规格，并通过询盘表单发起采购咨询。

**供应商信息（用于 About 页面）：**
- 公司：ANHUI BB-FOX STATIONERY CO., LTD.
- 地址：No.91, Chuangye Road, Economic Development Zone, Lai'an, Chuzhou, Anhui
- 电话：400-686-1990
- 网站：www.bb-fox.com
- 认证：WCA · BSCI · ISO9001 · ISO14001 · ISO45001
- 产品认证：ASTM D-4236 · CE · TRA · EN71-1,2,3 · CB · ROHS · MSDS · TDS

### 1.2 目标用户

- **主要用户**：海外 B2B 采购商（欧美、东南亚等地区）
- **使用场景**：买家通过搜索引擎或名片/邮件中的链接访问网站，浏览产品后发起询盘

### 1.3 核心功能模块

#### 页面结构

```
网站（Fancy Pencil）
├── 首页（Home）
│   ├── Hero Banner（品牌形象大图，来自画册封面）
│   ├── 产品分类入口（8 大类卡片）
│   ├── 公司亮点（工厂实力、认证、MOQ、定制能力）
│   └── 精选产品推荐（Featured Products）
├── 产品列表页（Products）
│   ├── 分类筛选（左侧或顶部 Tab）
│   ├── 产品卡片网格展示（封面图 + 名称 + SKU）
│   └── 搜索功能
├── 产品详情页（Product Detail）
│   ├── 多图展示（主图 + 缩略图切换）
│   ├── 产品名称、SKU、规格参数表
│   ├── 颜色数量、笔头类型、尺寸、重量
│   ├── 包装信息（Package / Gross Weight / MEAS.）
│   ├── MOQ（最小起订量）
│   └── 询盘按钮（跳转联系页）
├── 关于我们（About Us）
│   ├── 品牌介绍（Fancy Pencil）
│   ├── 工厂图片（来自画册 P02-P03）
│   ├── 资质证书展示
│   └── 公司核心优势
├── 联系我们（Contact）
│   ├── 询盘表单（姓名、邮箱、公司、产品需求、数量）
│   └── 联系方式（邮箱、地址）
└── 后台管理（/admin）
    └── 产品增删改查（Decap CMS）
```

### 1.4 产品分类体系

> 基于 BB-FOX 2026 画册实际产品整理，合并相近系列为 8 大展示类目：

| 分类 ID | 展示名称 | 画册对应系列 | 页码 |
|---------|---------|------------|------|
| `acrylic-marker` | Acrylic Marker | Hi-tech Acrylic Marker（Pointed Brush / Round Brush） | P04–P11 |
| `metallic-marker` | Metallic Marker | Hi-tech Acrylic Marker Metallic | P12–P13 |
| `acrylic-marker-pp` | Acrylic Marker (PP Series) | Hi-tech Acrylic Marker PP barrel | P14–P19 |
| `double-headed` | Double Headed Marker | Double headed Acrylic Marker / 2 Colors Marker | P20–P26 |
| `brush-soft-pens` | Brush & Soft Pens | Hi-tech Acrylic Brush Pens / Soft Pens / Glitter Brush | P27–P31 |
| `chalk-highlighter` | Chalk & Highlighter | Liquid Chalk Pens / Highlighter Pens / Double Headed Acrylic | P32–P35 |
| `paint-sticks` | Paint Sticks | Paint Sticks (8g/15g/36g) / Paint Sticks Pens | P36–P47 |
| `crayon-clear` | Crayon Clear | Crayon Clear Classic | P47 |

### 1.5 非功能需求

- **语言**：英文（面向海外买家）
- **响应式**：支持手机、平板、PC 访问
- **加载速度**：图片懒加载，首屏 3 秒内加载完成
- **SEO**：每个产品页有独立 URL、meta title/description
- **HTTPS**：全站 HTTPS（Vercel 自动提供）
- **邮件通知**：询盘表单提交后发送邮件（暂用 mock，后续配置真实邮箱）

---

## 二、商品数据结构

### 2.1 单个产品数据结构（JSON）

> 以下为真实产品示例，基于 BB-FOX 2026 画册 SKU 001-25177：

```json
{
  "id": "001-25177",
  "name": "Hi-tech Acrylic Marker Classic 6 Colors",
  "category": "acrylic-marker",
  "tipType": "Pointed Brush",
  "sku": "001-25177",
  "coverImage": "/images/products/001-25177-cover.jpg",
  "images": [
    "/images/products/001-25177-cover.jpg",
    "/images/products/001-25177-detail.jpg"
  ],
  "description": "Hi-tech Acrylic Marker with pointed brush tip. Features fiber soft head with creamy texture, Hi-Tech ink controller, built-in stainless steel bar, aeronautical nozzles and colorful barrel. Smooth color layering with vivid, long-lasting pigments.",
  "specifications": {
    "length": "137mm",
    "diameter": "12.5mm",
    "tipType": "Pointed Brush",
    "inkType": "Acrylic",
    "colors": 6,
    "features": ["Color hat", "Fiber soft head", "Visible window", "Hi-Tech ink controller", "UV printing", "Built-in stainless steel bar", "Aeronautical nozzles", "Colorful barrel"]
  },
  "packaging": {
    "package": "12 boxes / 8 boxes",
    "grossWeight": "12.1 kgs",
    "meas": "35.2*19.8*32.8cm"
  },
  "moq": 96,
  "tags": ["acrylic", "pointed-brush", "classic", "6-colors"],
  "isActive": true,
  "sortOrder": 1
}
```

### 2.2 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | 唯一标识，即 SKU 编号，用于 URL 路由（如 `001-25177`） |
| `name` | string | ✅ | 产品英文名称（如 `Hi-tech Acrylic Marker Classic 6 Colors`） |
| `category` | string | ✅ | 产品大类，对应 1.4 分类体系 |
| `tipType` | string | ❌ | 笔头类型（Pointed Brush / Round Brush / Writing Brush / Metal Tip 等） |
| `sku` | string | ✅ | 产品编号（与 id 相同） |
| `coverImage` | string | ✅ | 列表页封面图路径 |
| `images` | string[] | ✅ | 详情页图片列表（第一张为主图） |
| `description` | string | ✅ | 产品英文描述 |
| `specifications` | object | ✅ | 规格参数（长度、直径、笔头类型、颜色数量、特性列表） |
| `packaging` | object | ✅ | 包装信息（package 数量、毛重、外箱尺寸） |
| `moq` | number | ✅ | 最小起订量（根据 package 数量计算） |
| `tags` | string[] | ❌ | 标签，用于筛选（如 `acrylic`、`metallic`、`6-colors`） |
| `isActive` | boolean | ✅ | 是否上架显示 |
| `sortOrder` | number | ❌ | 排序权重，数字越小越靠前 |

---

## 三、技术实现方案

### 3.1 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| **前端框架** | Next.js 14（App Router，静态导出） | React 生态，SEO 友好，支持静态生成 |
| **样式** | Tailwind CSS | 原子化 CSS，开发效率高 |
| **UI 组件** | shadcn/ui | 基于 Tailwind 的高质量组件库 |
| **图片存储** | Cloudinary（免费 25GB） | 图片 CDN，自动压缩优化 |
| **后台 CMS** | Decap CMS（原 Netlify CMS） | 开源静态网站 CMS，可视化管理产品 |
| **代码托管** | GitHub | 版本控制 |
| **网站部署** | Vercel | 自动部署，全球 CDN，免费 |
| **域名** | Namecheap / 阿里云 | 约 $10/年 |
| **邮件通知** | Resend / EmailJS | 询盘表单提交后发邮件通知 |

### 3.2 项目目录结构

```
pencil-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 全局布局（Header + Footer）
│   ├── page.tsx                  # 首页
│   ├── products/
│   │   ├── page.tsx              # 产品列表页
│   │   └── [id]/
│   │       └── page.tsx          # 产品详情页（动态路由）
│   ├── about/
│   │   └── page.tsx              # 关于我们
│   ├── contact/
│   │   └── page.tsx              # 联系我们
│   └── admin/                    # Decap CMS 后台入口
│       └── index.html
├── components/                   # 公共组件
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx        # 首页轮播
│   │   ├── CategoryGrid.tsx      # 分类入口
│   │   └── FeaturedProducts.tsx  # 推荐产品
│   ├── products/
│   │   ├── ProductCard.tsx       # 产品卡片
│   │   ├── ProductGrid.tsx       # 产品网格
│   │   ├── ProductFilter.tsx     # 分类筛选
│   │   └── ProductImageGallery.tsx # 详情页图片画廊
│   └── common/
│       ├── InquiryForm.tsx       # 询盘表单
│       └── WhatsAppButton.tsx    # WhatsApp 悬浮按钮
├── content/                      # Decap CMS 管理的内容
│   └── products/                 # 每个产品一个 .md 文件
│       ├── pen-001.md
│       ├── pen-002.md
│       └── ...
├── public/
│   ├── images/                   # 静态图片（或使用 Cloudinary URL）
│   └── admin/                    # Decap CMS 静态资源
├── lib/
│   ├── products.ts               # 产品数据读取工具函数
│   └── categories.ts             # 分类数据
├── types/
│   └── product.ts                # TypeScript 类型定义
├── public/
│   └── admin/
│       └── config.yml            # Decap CMS 配置文件
├── next.config.js
├── tailwind.config.js
└── package.json
```

### 3.3 Decap CMS 后台管理方案

#### 工作原理

```
朋友访问 yoursite.com/admin
    ↓
GitHub OAuth 登录验证
    ↓
可视化界面（增删改产品）
    ↓
自动 commit 到 GitHub 仓库
    ↓
Vercel 检测到 push，自动重新构建
    ↓
约 1-2 分钟后，网站更新生效
```

#### Decap CMS 配置（`public/admin/config.yml`）

```yaml
backend:
  name: github
  repo: your-username/pencil-website
  branch: main

media_folder: public/images/products
public_folder: /images/products

collections:
  - name: products
    label: Products
    folder: content/products
    create: true
    slug: "{{fields.sku}}"
    fields:
      - { label: "Product Name", name: "name", widget: "string" }
      - { label: "SKU", name: "sku", widget: "string" }
      - label: "Category"
        name: "category"
        widget: "select"
        options:
          - { label: "Acrylic Marker", value: "acrylic-marker" }
          - { label: "Metallic Marker", value: "metallic-marker" }
          - { label: "Acrylic Marker (PP Series)", value: "acrylic-marker-pp" }
          - { label: "Double Headed Marker", value: "double-headed" }
          - { label: "Brush & Soft Pens", value: "brush-soft-pens" }
          - { label: "Chalk & Highlighter", value: "chalk-highlighter" }
          - { label: "Paint Sticks", value: "paint-sticks" }
          - { label: "Crayon Clear", value: "crayon-clear" }
      - label: "Tip Type"
        name: "tipType"
        widget: "select"
        required: false
        options:
          - { label: "Pointed Brush", value: "Pointed Brush" }
          - { label: "Round Brush", value: "Round Brush" }
          - { label: "Writing Brush", value: "Writing Brush" }
          - { label: "Metal Tip", value: "Metal Tip" }
          - { label: "Loft Brush", value: "Loft Brush" }
          - { label: "Axe Brush", value: "Axe Brush" }
      - { label: "Cover Image", name: "coverImage", widget: "image" }
      - { label: "Product Images", name: "images", widget: "list", field: { label: "Image", name: "image", widget: "image" } }
      - { label: "Description", name: "description", widget: "text" }
      - { label: "Length", name: "length", widget: "string", required: false, hint: "e.g. 137mm" }
      - { label: "Diameter", name: "diameter", widget: "string", required: false, hint: "e.g. 12.5mm" }
      - { label: "Colors Count", name: "colors", widget: "number", required: false }
      - { label: "Package Info", name: "package", widget: "string", required: false, hint: "e.g. 12 boxes / 8 boxes" }
      - { label: "Gross Weight", name: "grossWeight", widget: "string", required: false, hint: "e.g. 12.1 kgs" }
      - { label: "Measurements", name: "meas", widget: "string", required: false, hint: "e.g. 35.2*19.8*32.8cm" }
      - { label: "MOQ", name: "moq", widget: "number" }
      - { label: "Tags", name: "tags", widget: "list", allow_add: true }
      - { label: "Active", name: "isActive", widget: "boolean", default: true }
      - { label: "Sort Order", name: "sortOrder", widget: "number", default: 99 }
```

### 3.4 部署流程

```bash
# 1. 本地开发
npx create-next-app@latest pencil-website --typescript --tailwind --app
cd pencil-website

# 2. 安装依赖
npm install

# 3. 本地开发调试
npm run dev

# 4. 推送到 GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/your-username/pencil-website.git
git push -u origin main

# 5. Vercel 导入 GitHub 仓库，自动部署

# 6. 绑定自定义域名（在 Vercel 控制台配置）

# 7. 配置 Decap CMS GitHub OAuth App
#    GitHub Settings → Developer settings → OAuth Apps → New OAuth App
```

### 3.5 费用清单

| 项目 | 费用 | 说明 |
|------|------|------|
| 域名 | ~$10/年（约 70 元） | Namecheap 购买 .com 域名 |
| GitHub | 免费 | 代码托管 |
| Vercel | 免费 | 网站部署 + CDN |
| Cloudinary | 免费 | 图片存储（25GB 免费额度） |
| Decap CMS | 免费 | 开源后台管理 |
| **合计** | **约 70 元/年** | 仅域名费用 |

---

## 四、开发里程碑

| 阶段 | 内容 | 预估工时 |
|------|------|---------|
| **Phase 1** | 项目初始化、基础布局（Header/Footer）、首页 | 4–6 小时 |
| **Phase 2** | 产品列表页、分类筛选、产品卡片 | 4–6 小时 |
| **Phase 3** | 产品详情页、图片画廊 | 3–4 小时 |
| **Phase 4** | 关于我们、联系页、询盘表单 | 2–3 小时 |
| **Phase 5** | Decap CMS 接入、后台配置 | 2–3 小时 |
| **Phase 6** | 产品数据录入（约 100 条） | 4–8 小时 |
| **Phase 7** | 部署上线、域名绑定、SEO 优化 | 1–2 小时 |
| **合计** | | **约 20–32 小时** |

---

## 五、待确认事项

- [x] ~~域名是否已有？品牌名是什么？~~ → 品牌名：**Fancy Pencil**
- [x] ~~是否需要多语言支持？~~ → **英文单语言**
- [x] ~~询盘表单提交后，通知邮箱是哪个？~~ → **暂用 mock 邮箱**，后续替换
- [x] ~~是否需要 WhatsApp 联系按钮？~~ → **暂不需要**
- [x] ~~产品图片是否已准备好？~~ → **已从 PDF 画册提取**（31 页，654 张原始图片，另有 31 张整页渲染图）
- [ ] 域名是否已注册？（建议：`fancypencil.com`）
- [ ] 是否需要 Google Analytics 统计访客数据？
- [ ] 后续真实邮箱地址确认

---

## 六、产品 SKU 清单（从 PDF 画册提取）

> 来源：BB-FOX 2026 Painting Catalog，共 31 页

### 6.1 Acrylic Marker — Pointed Brush（P04–P09）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25177 | Hi-tech Acrylic Marker Classic | 6 Colors | 12 boxes / 8 boxes | 12.1 kgs | 35.2*19.8*32.8cm |
| 001-25178 | Hi-tech Acrylic Marker Classic | 12 Colors | 12 boxes / 4 boxes | 11.6 kgs | 47.2*27.2*37.8cm |
| 001-25179 | Hi-tech Acrylic Marker Classic | 24 Colors | 6 boxes / 4 boxes | 11.2 kgs | 46*27.2*37.8cm |
| 001-25215 | Hi-tech Acrylic Marker Classic | 12 Colors | 12 boxes / 6 boxes | 18.6 kgs | 48.5*37*49cm |
| 001-25190 | Hi-tech Acrylic Marker Classic | 24 Colors | 6 boxes / 6 boxes | 17.2 kgs | 48.5*37*41cm |
| 001-25191 | Hi-tech Acrylic Marker Classic | 36 Colors | 4 boxes / 6 boxes | 17 kgs | 50*48.5*28.5cm |
| 001-25216 | Hi-tech Acrylic Marker Classic | 48 Colors | 3 boxes / 6 boxes | 16.9 kgs | 48.5*37*37cm |
| 001-25217 | Hi-tech Acrylic Marker Classic | 60 Colors | 2 boxes / 6 boxes | 14.1 kgs | 50*48.5*23.5cm |
| 001-25231 | Hi-tech Acrylic Marker Classic | 12 Colors | 40 boxes | 14.6 kgs | 43*40*48cm |
| 001-25232 | Hi-tech Acrylic Marker Classic | 24 Colors | 24 boxes | 15.1 kgs | 43*40*39cm |
| 001-25233 | Hi-tech Acrylic Marker Classic | 36 Colors | 16 boxes | 14.2 kgs | 43*40*35cm |
| 001-25234 | Hi-tech Acrylic Marker Classic | 48 Colors | 16 boxes | 18.2 kgs | 43*40*41cm |
| 001-25235 | Hi-tech Acrylic Marker Classic | 60 Colors | 12 boxes | 16.8 kgs | 43*40*36cm |
| 001-25236 | Hi-tech Acrylic Marker Classic | 72 Colors | 12 boxes | 19.8 kgs | 43*40*41cm |
| 001-25237 | Hi-tech Acrylic Marker Classic | 84 Colors | 8 boxes | 15.3 kgs | 43*40*31cm |
| 001-25238 | Hi-tech Acrylic Marker Classic | 96 Colors | 6 boxes | 13.1 kgs | 56*22.5*34cm |
| 001-25239 | Hi-tech Acrylic Marker Classic | 108 Colors | 6 boxes | 14.6 kgs | 56*22.5*38cm |
| 001-25240 | Hi-tech Acrylic Marker Classic | 120 Colors | 6 boxes | 16.1 kgs | 56*23*41cm |
| HB-25155-59 | Hi-tech Acrylic Marker Display Stand | Mixed | 672 Pcs | 13.6 kgs | 42*50*50cm |

### 6.2 Acrylic Marker — Round Brush（P10–P11）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25241 | Hi-tech Acrylic Marker Classic | 12 Colors | 40 boxes | 14.6 kgs | 43*40*48cm |
| 001-25242 | Hi-tech Acrylic Marker Classic | 24 Colors | 24 boxes | 15.1 kgs | 43*40*39cm |
| 001-25243 | Hi-tech Acrylic Marker Classic | 36 Colors | 16 boxes | 14.2 kgs | 43*40*35cm |
| 001-25244 | Hi-tech Acrylic Marker Classic | 48 Colors | 16 boxes | 18.2 kgs | 43*40*41cm |
| 001-25245 | Hi-tech Acrylic Marker Classic | 60 Colors | 12 boxes | 16.8 kgs | 43*40*36cm |
| 001-25246 | Hi-tech Acrylic Marker Classic | 72 Colors | 12 boxes | 19.8 kgs | 43*40*41cm |
| 001-25247 | Hi-tech Acrylic Marker Classic | 84 Colors | 8 boxes | 15.3 kgs | 43*40*31cm |
| 001-25248 | Hi-tech Acrylic Marker Classic | 96 Colors | 6 boxes | 13.1 kgs | 56*22.5*34cm |
| 001-25249 | Hi-tech Acrylic Marker Classic | 108 Colors | 6 boxes | 14.6 kgs | 56*22.5*38cm |
| 001-25250 | Hi-tech Acrylic Marker Classic | 120 Colors | 6 boxes | 16.1 kgs | 56*23*41cm |

### 6.3 Acrylic Marker — Metallic（P12–P13）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25290 | Hi-tech Acrylic Marker Metallic | 6 Colors | 12 boxes / 8 boxes | 12.1 kgs | 35.2*19.8*32.8cm |
| 001-25291 | Hi-tech Acrylic Marker Metallic | 6 Colors | 12 boxes / 8 boxes | 12.1 kgs | 35.2*19.8*32.8cm |
| 001-25292 | Hi-tech Acrylic Marker Metallic | 12 Colors | 12 boxes / 4 boxes | 11.6 kgs | 47.2*27.2*37.8cm |
| 001-25293 | Hi-tech Acrylic Marker Metallic | 6 Colors | 12 boxes / 8 boxes | 12.1 kgs | 35.2*19.8*32.8cm |
| 001-25294 | Hi-tech Acrylic Marker Metallic | 6 Colors | 12 boxes / 8 boxes | 12.1 kgs | 35.2*19.8*32.8cm |
| 001-25295 | Hi-tech Acrylic Marker Metallic | 12 Colors | 12 boxes / 4 boxes | 11.6 kgs | 47.2*27.2*37.8cm |

### 6.4 Acrylic Marker — PP Barrel Pointed Brush（P14–P19）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25180 | Hi-tech Acrylic Marker Classic | 6 Colors | 12 boxes / 4 boxes | 12.1 kgs | 35.2*19.8*32.8cm |
| 001-25181 | Hi-tech Acrylic Marker Classic | 12 Colors | 12 boxes / 4 boxes | 11.6 kgs | 47.2*27.2*37.8cm |
| 001-25182 | Hi-tech Acrylic Marker Classic | 24 Colors | 6 boxes / 4 boxes | 11.2 kgs | 46*27.2*37.8cm |
| 001-25200 | Hi-tech Acrylic Marker Classic | 12 Colors | 12 boxes / 6 boxes | 18.6 kgs | 48.5*37*49cm |
| 001-25188 | Hi-tech Acrylic Marker Classic | 24 Colors | 6 boxes / 6 boxes | 17.2 kgs | 48.5*37*41cm |
| 001-25189 | Hi-tech Acrylic Marker Classic | 36 Colors | 4 boxes / 6 boxes | 17 kgs | 50*48.5*28.5cm |
| 001-25201 | Hi-tech Acrylic Marker Classic | 48 Colors | 3 boxes / 6 boxes | 16.9 kgs | 48.5*37*37cm |
| 001-25202 | Hi-tech Acrylic Marker Classic | 60 Colors | 2 boxes / 6 boxes | 14.1 kgs | 50*48.5*23.5cm |
| 001-25251 | Hi-tech Acrylic Marker Classic | 12 Colors | 40 boxes | 15.4 kgs | 43*40*48cm |
| 001-25252 | Hi-tech Acrylic Marker Classic | 24 Colors | 24 boxes | 15.8 kgs | 43*40*39cm |
| 001-25253 | Hi-tech Acrylic Marker Classic | 36 Colors | 16 boxes | 15 kgs | 43*40*35cm |
| 001-25254 | Hi-tech Acrylic Marker Classic | 48 Colors | 16 boxes | 19.2 kgs | 43*40*41cm |
| 001-25255 | Hi-tech Acrylic Marker Classic | 60 Colors | 12 boxes | 17.7 kgs | 43*40*36cm |
| 001-25256 | Hi-tech Acrylic Marker Classic | 72 Colors | 12 boxes | 20.6 kgs | 43*40*41cm |
| 001-25257 | Hi-tech Acrylic Marker Classic | 84 Colors | 8 boxes | 16.2 kgs | 43*40*31cm |
| 001-25258 | Hi-tech Acrylic Marker Classic | 96 Colors | 6 boxes | 13.9 kgs | 56*22.5*34cm |
| 001-25259 | Hi-tech Acrylic Marker Classic | 108 Colors | 6 boxes | 15.5 kgs | 56*22.5*38cm |
| 001-25260 | Hi-tech Acrylic Marker Classic | 120 Colors | 6 boxes | 17.1 kgs | 56*23*41cm |

### 6.5 Double Headed Acrylic Marker（P20–P23）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25183 | Double headed Acrylic Marker Classic | 12 Colors | 12 boxes / 8 boxes | 13.1 kgs | 36.6*34.8*21.8cm |
| 001-25184 | Double headed Acrylic Marker Classic | 24 Colors | 12 boxes / 4 boxes | 13.3 kgs | 47.2*41.2*27.6cm |
| 001-25185 | Double headed Acrylic Marker Classic | 48 Colors | 6 boxes / 4 boxes | 12.8 kgs | 46*41.2*27.6cm |
| 001-25261 | Double headed Acrylic Marker Classic | 12 Colors | 40 boxes | 17 kgs | 43*40*48cm |
| 001-25262 | Double headed Acrylic Marker Classic | 24 Colors | 24 boxes | 17.6 kgs | 43*40*39cm |
| 001-25263 | Double headed Acrylic Marker Classic | 36 Colors | 16 boxes | 16.9 kgs | 43*40*35cm |
| 001-25264 | Double headed Acrylic Marker Classic | 48 Colors | 16 boxes | 21.4 kgs | 43*40*41cm |
| 001-25265 | Double headed Acrylic Marker Classic | 60 Colors | 12 boxes | 20.3 kgs | 43*40*36cm |
| 001-25266 | Double headed Acrylic Marker Classic | 72 Colors | 12 boxes | 23.9 kgs | 43*40*41cm |
| 001-25267 | Double headed Acrylic Marker Classic | 84 Colors | 8 boxes | 18.6 kgs | 43*40*31cm |
| 001-25268 | Double headed Acrylic Marker Classic | 96 Colors | 6 boxes | 15.9 kgs | 56*22.5*34cm |
| 001-25269 | Double headed Acrylic Marker Classic | 108 Colors | 6 boxes | 17.7 kgs | 56*22.5*38cm |
| 001-25270 | Double headed Acrylic Marker Classic | 120 Colors | 6 boxes | 19.6 kgs | 56*23*41cm |

### 6.6 2 Colors Hi-tech Acrylic Marker（P20–P26）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25186 | 2 Colors Hi-tech Acrylic Marker Classic | 12 Colors | 12 boxes / 8 boxes | 13.1 kgs | 36.6*34.8*21.8cm |
| 001-25187 | 2 Colors Hi-tech Acrylic Marker Classic | 24 Colors | 12 boxes / 4 boxes | 13.3 kgs | 47.2*41.2*27.6cm |
| 001-25213 | 2 Colors Hi-tech Acrylic Marker Classic | 48 Colors | 6 boxes / 4 boxes | 12.8 kgs | 46*41.2*27.6cm |
| 001-25271 | 2 Colors Hi-tech Acrylic Marker Classic | 24 Colors | 40 boxes | 17 kgs | 43*40*48cm |
| 001-25272 | 2 Colors Hi-tech Acrylic Marker Classic | 48 Colors | 24 boxes | 17.6 kgs | 43*40*39cm |
| 001-25273 | 2 Colors Hi-tech Acrylic Marker Classic | 72 Colors | 16 boxes | 16.9 kgs | 43*40*35cm |
| 001-25274 | 2 Colors Hi-tech Acrylic Marker Classic | 96 Colors | 16 boxes | 21.4 kgs | 43*40*41cm |
| 001-25281 | 2 Colors Hi-tech Acrylic Marker Classic | 120 Colors | 12 boxes | 20.3 kgs | 43*40*36cm |

### 6.7 Brush & Soft Pens（P27–P31）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25288 | Hi-tech Acrylic Brush Pens Classic | 6 Colors | 48 boxes / 4 boxes | 17.8 kgs | 42*31*46cm |
| 001-25289 | Hi-tech Acrylic Brush Pens Classic | 12 Colors | 12 boxes / 4 boxes | 11.4 kgs | 47.2*27.2*37.8cm |
| 001-25275-A | Hi-tech Soft Pen Classic | 6 Colors | 24 boxes / 8 boxes | 14.3 kgs | 39*32*35cm |
| 001-25275-B | Hi-tech Soft Pen Classic | 6 Colors | 24 boxes / 8 boxes | 14.3 kgs | 39*32*35cm |
| 001-25276 | Hi-tech Soft Pen Classic | 12 Colors | 12 boxes / 8 boxes | 13.9 kgs | 39*32*35cm |
| 001-25279-A | Hi-tech Glitter Brush Classic | 6 Colors | 48 boxes / 4 boxes | 17.4 kgs | 42*31*46cm |
| 001-25279-B | Hi-tech Glitter Brush Classic | 6 Colors | 48 boxes / 4 boxes | 17.4 kgs | 42*31*46cm |
| 001-25280 | Hi-tech Glitter Brush Classic | 12 Colors | 12 boxes / 4 boxes | 11.1 kgs | 47.2*27.2*37.8cm |

### 6.8 Chalk & Highlighter（P32–P35）

| SKU | 产品名称 | 颜色数 | 包装 | 毛重 | 尺寸 |
|-----|---------|--------|------|------|------|
| 001-25283 | Hi-Tech Liquid Chalk Pens Classic | 6 Colors | 48 boxes / 4 boxes | 17.8 kgs | 42*31*46cm |
| 001-25277 | Hi-Tech Highlighter Pens Classic | 6 Colors | 48 boxes / 4 boxes | 17.2 kgs | 42*31*46cm |
| 001-25286 | 2 Heads Soft & Acrylic Marker Classic | 12 Colors | 12 boxes / 8 boxes | 13.8 kgs | 36.6*34.8*21.8cm |
| 001-25284 | 2 Heads Soft & Acrylic Marker Classic | 24 Colors | 12 boxes / 4 boxes | 13.6 kgs | 47.2*41.2*27.6cm |
| 001-25287 | 2 Heads Glitter Brush & Acrylic Marker | 12 Colors | 12 boxes / 8 boxes | 13.9 kgs | 36.6*34.8*21.8cm |
| 001-25285 | 2 Heads Glitter Brush & Acrylic Marker | 24 Colors | 12 boxes / 4 boxes | 13.9 kgs | 47.2*41.2*27.6cm |

### 6.9 Paint Sticks（P36–P47）

| SKU | 产品名称 | 规格 | 包装 | 毛重 | 尺寸 |
|-----|---------|------|------|------|------|
| 001-14487 | Paint Sticks Classic | 8g / 6 Colors | 20 boxes / 6 boxes | 11.7 kgs | 40*27.5*36.5cm |
| 001-14488 | Paint Sticks Macaron | 8g / 6 Colors | 20 boxes / 6 boxes | 11.7 kgs | 49*30*35cm |
| 001-14490 | Paint Sticks Metallic | 8g / 6 Colors | 20 boxes / 6 boxes | 11.7 kgs | 49*30*35cm |
| 001-14489 | Paint Sticks Neon | 8g / 6 Colors | 20 boxes / 6 boxes | 11.7 kgs | 49*30*35cm |
| 001-14480 | Paint Sticks Classic | 15g / 6 Colors | 12 boxes / 8 boxes | 18 kgs | 31.5*26*40cm |
| 001-14481 | Paint Sticks Classic | 36g / 6 Colors | 8 boxes / 6 boxes | 17.7 kgs | 38*27.5*38cm |
| 001-14484 | Paint Sticks Classic | 8g / 12 Colors | 12 boxes / 6 boxes | 17.6 kgs | 58*33.2*36cm |
| 001-14485 | Paint Sticks Macaron | 8g / 12 Colors | 12 boxes / 6 boxes | 17.6 kgs | 58*33.2*36cm |
| 001-14486 | Paint Sticks Metallic | 8g / 12 Colors | 12 boxes / 6 boxes | 17.6 kgs | 58*33.2*36cm |
| 001-14483 | Paint Sticks Classic+Macaron+Metallic | 36 Colors | 6 boxes / 4 boxes | 15.5 kgs | 54*31.5*34cm |
| 001-14491 | Paint Sticks Classic | 6 Colors (Pens) | 20 boxes / 6 boxes | 10.8 kgs | 40*31*30cm |
| 001-14494 | Paint Sticks Macaron | 6 Colors (Pens) | 20 boxes / 6 boxes | 10.8 kgs | 40*31*30cm |
| 001-14493 | Paint Sticks Metallic | 6 Colors (Pens) | 20 boxes / 6 boxes | 10.8 kgs | 40*31*30cm |
| 001-14492 | Paint Sticks Neon | 6 Colors (Pens) | 20 boxes / 6 boxes | 10.8 kgs | 40*31*30cm |
| 001-14499 | Paint Sticks Classic | 12 Colors (Pens) | 12 boxes / 6 boxes | 17 kgs | 44*30*48cm |
| 001-14511 | Paint Sticks Macaron | 12 Colors (Pens) | 12 boxes / 6 boxes | 17 kgs | 44*30*48cm |
| 001-14507 | Paint Sticks Metallic | 12 Colors (Pens) | 12 boxes / 6 boxes | 17 kgs | 44*30*48cm |

### 6.10 特殊系列（P27 / P47）

| SKU | 产品名称 | 规格 | 包装 | 毛重 | 尺寸 |
|-----|---------|------|------|------|------|
| 001-25334 | Hi-tech Acrylic Marker Classic | 60 Colors | 16 boxes / 16 boxes | 15.4 kgs | 42*36*32.5cm |
| 001-25335 | Hi-tech Acrylic Marker Classic | 80 Colors | 8 boxes / 8 boxes | 10.3 kgs | 36*27.2*34.6cm |
| 001-25336 | Hi-tech Acrylic Marker Classic | 120 Colors | 4 boxes / 4 boxes | 7.5 kgs | 52.4*25.7*18.3cm |
| 001-25322 | Acrylic Marker HIGH GLOSS | 6 Colors | 144 boxes / 4 boxes | 14.6 kgs | 36.6*35*31cm |
| 001-25323 | Acrylic Marker HIGH GLOSS | 12 Colors | 72 boxes / 2 boxes | 14.3 kgs | 37.6*33.8*29.5cm |
| 001-25320 | Acrylic Marker HIGH GLOSS | 24 Colors | 36 boxes / 6 boxes | 12.6 kgs | 37.2*28.2*52.8cm |
| 001-25324 | Marker GEL STICK | 6 Colors | 144 boxes / 4 boxes | 14.6 kgs | 36.6*35*31cm |
| 001-25325 | Marker GEL STICK | 12 Colors | 72 boxes / 2 boxes | 14.3 kgs | 37.6*33.8*29.5cm |
| 001-25319 | Marker GEL STICK | 24 Colors | 36 boxes / 6 boxes | 12.6 kgs | 37.2*28.2*52.8cm |
| 001-25333 | Hi-tech Acrylic Marker SUPER METALLIC | 6 Colors | 96 boxes / 4 boxes | 13.1 kgs | 35*19.8*39.5cm |
| 001-25317 | Hi-tech Acrylic Marker SUPER METALLIC | 12 Colors | 60 boxes / 2 boxes | 15.8 kgs | 37.6*33.8*25cm |
| 001-25331 | Hi-tech Marker SUPER GLITTER | 12 Colors | 96 boxes / 4 boxes | 13.1 kgs | 35*19.8*39.5cm |
| 001-25332 | Hi-tech Marker SUPER GLITTER | 24 Colors | 60 boxes / 2 boxes | 15.8 kgs | 37.6*33.8*25cm |
| 001-25302 | Hi-tech Double headed ACRYLIC MARKER | 24 Colors | 24 boxes / 24 boxes | 15.6 kgs | 42*39*37cm |
| 001-25303 | Hi-tech Double headed ACRYLIC MARKER | 36 Colors | 16 boxes / 16 boxes | 14.5 kgs | 42*39*31.4cm |
| 001-25305 | Hi-tech Double headed ACRYLIC MARKER | 60 Colors | 12 boxes / 12 boxes | 16.2 kgs | 42*39*34cm |
| 001-25282 | Crayon Clear Classic | 12 Colors | 12 boxes / 6 boxes | 15.8 kgs | 49.5*30*35cm |
