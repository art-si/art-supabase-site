<script setup lang="ts">
import { computed, ref } from 'vue'
import { links, modules, type ModuleGroup } from './modules'

const base = import.meta.env.BASE_URL
const menuOpen = ref(false)
const activeGroup = ref<'全部' | ModuleGroup>('全部')
const groups: Array<'全部' | ModuleGroup> = ['全部', '业务运营', '组织治理', '平台底座']
const visibleModules = computed(() =>
  activeGroup.value === '全部'
    ? modules
    : modules.filter((module) => module.category === activeGroup.value),
)

const showcases = [
  {
    label: '运输运营',
    title: '把每一程运输，放进同一个工作台。',
    description: '订单、运力、在途与结算形成连续的业务视图，让调度和管理都能看到当前进展。',
    image: 'dashboard.png',
    width: 1920,
    height: 878,
    alt: '亿企工场运输运营工作台真实截图',
  },
  {
    label: '运输开单',
    title: '从一张运输单，开启协同的每一步。',
    description: '运输路线、收发货信息与费用操作集中在同一工作区，减少跨页面切换。',
    image: 'order-entry.png',
    width: 1920,
    height: 878,
    alt: '亿企工场货物运输单开单页面真实截图',
  },
  {
    label: '安全生产',
    title: '让每一次应急演练，有计划、有记录。',
    description: '应急演练计划、执行状态与责任信息集中呈现，让安全任务有据可查。',
    image: 'safety.png',
    width: 1920,
    height: 878,
    alt: '亿企工场应急演练计划页面真实截图',
  },
] as const
const activeShowcase = ref(0)
const currentShowcase = computed(() => showcases[activeShowcase.value]!)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">跳转到正文</a>

    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="亿企工场，返回首页" @click="closeMenu">
          <img :src="`${base}logo.webp`" width="38" height="38" alt="" />
          <span class="brand-text"><strong>亿企工场</strong><small>YIQI WORKSHOP</small></span>
        </a>
        <nav :class="['primary-nav', { 'is-open': menuOpen }]" aria-label="主导航">
          <a href="#platform" @click="closeMenu">平台能力</a>
          <a href="#products" @click="closeMenu">产品矩阵</a>
          <a href="#experience" @click="closeMenu">产品实景</a>
          <a href="#architecture" @click="closeMenu">技术架构</a>
          <a :href="links.docs" target="_blank" rel="noopener noreferrer" @click="closeMenu"
            >开发文档 ↗</a
          >
        </nav>
        <a class="header-action" :href="links.demo" target="_blank" rel="noopener noreferrer">
          体验产品 <span aria-hidden="true">↗</span>
        </a>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="切换导航菜单"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span>
        </button>
      </div>
    </header>

    <main id="main">
      <section id="top" class="hero">
        <div class="hero-grid" aria-hidden="true"></div>
        <div class="hero-glow" aria-hidden="true"></div>
        <div class="container hero-content">
          <div class="hero-copy">
            <p class="hero-eyebrow">
              <span class="live-dot"></span> 模块化企业业务平台 · OPEN SOURCE
            </p>
            <h1>
              一个底座。<br /><span>连接企业业务<br />的每一步。</span>
            </h1>
            <p class="hero-description">
              从供应链、制造、仓储到运输、财务与组织治理，亿企工场把独立演进的业务应用，连接成一套真正协同的平台。
            </p>
            <div class="hero-actions">
              <a
                class="button button-primary"
                :href="links.demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                探索在线演示 <span aria-hidden="true">↗</span>
              </a>
              <a class="button button-quiet" href="#products"
                >浏览产品矩阵 <span aria-hidden="true">↓</span></a
              >
            </div>
            <div class="hero-proof">
              <span>Vue 3 + TypeScript</span><span>Supabase</span><span>Git Submodules</span>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-visual-halo" aria-hidden="true"></div>
            <div class="floating-label floating-label-top" aria-hidden="true">
              <i></i> 统一平台运行时
            </div>
            <div class="product-window">
              <div class="window-bar">
                <span class="window-lights"><i></i><i></i><i></i></span
                ><span>art-supabase-pro / 工作台</span
                ><span class="window-status">LIVE PREVIEW</span>
              </div>
              <img
                :src="`${base}dashboard.png`"
                width="1920"
                height="878"
                alt="亿企工场运输运营工作台真实截图"
                fetchpriority="high"
              />
            </div>
            <div class="floating-label floating-label-bottom" aria-hidden="true">
              <span class="floating-spark">✦</span> 跨业务协同，持续扩展
            </div>
          </div>
        </div>
        <div class="container hero-bottom">
          <span>从一个业务开始，向完整企业系统生长</span
          ><a href="#platform">向下探索 <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="platform" class="platform-section section-pad">
        <div class="container">
          <div class="section-heading split-heading">
            <div>
              <p class="eyebrow">WHY YIQI WORKSHOP</p>
              <h2>让复杂业务，<br />运行在同一个坐标系里。</h2>
            </div>
            <p>
              企业系统不该是一座座信息孤岛。统一身份、权限与数据底座，让每个业务模块各司其职，也能自然协同。
            </p>
          </div>
          <div class="value-grid">
            <article class="value-card value-card-featured">
              <div class="value-card-top">
                <span class="card-index">01 / 统一底座</span
                ><span class="card-arrow" aria-hidden="true">↗</span>
              </div>
              <div class="foundation-art" aria-hidden="true">
                <div class="foundation-center">ART<span>PRO</span></div>
                <span class="foundation-node node-a">认证</span
                ><span class="foundation-node node-b">租户</span
                ><span class="foundation-node node-c">权限</span
                ><span class="foundation-node node-d">工作流</span>
              </div>
              <h3>一个平台，统一运行。</h3>
              <p>
                认证、租户、菜单、权限、审批与公共组件由主平台提供，业务应用无需重复搭建基础能力。
              </p>
            </article>
            <article class="value-card">
              <div class="value-card-top">
                <span class="card-index">02 / 独立演进</span
                ><span class="card-arrow" aria-hidden="true">↗</span>
              </div>
              <div class="stack-art" aria-hidden="true">
                <span>SCM</span><span>MES</span><span>WMS</span><span>TMS</span><span>…</span>
              </div>
              <h3>模块组合，按需生长。</h3>
              <p>每个业务领域拥有独立子仓与清晰边界，既能独立开发，也能在同一平台里交付。</p>
            </article>
            <article class="value-card">
              <div class="value-card-top">
                <span class="card-index">03 / 可信治理</span
                ><span class="card-arrow" aria-hidden="true">↗</span>
              </div>
              <div class="governance-art" aria-hidden="true">
                <div class="governance-ring"><span>AI</span></div>
                <span class="governance-trace">权限 · 审计 · 追溯</span>
              </div>
              <h3>智能能力，有边界。</h3>
              <p>将 AI 建议融入业务，同时保留租户隔离、操作授权与运行审计，让智能化更可控。</p>
            </article>
          </div>
        </div>
      </section>

      <section class="flow-section" aria-labelledby="flow-title">
        <div class="container flow-inner">
          <div>
            <p class="eyebrow eyebrow-light">ONE CONNECTED FLOW</p>
            <h2 id="flow-title">一条贯通业务的主线。</h2>
            <p>从客户需求到交付结算，把关键业务节点连接起来。</p>
          </div>
          <div class="flow-steps" aria-label="业务流程：销售、制造、仓储、运输、结算">
            <span>销售</span><i></i><span>制造</span><i></i><span>仓储</span><i></i><span>运输</span
            ><i></i><span>结算</span>
          </div>
        </div>
      </section>

      <section id="products" class="products-section section-pad">
        <div class="container">
          <div class="section-heading products-heading">
            <div>
              <p class="eyebrow">PRODUCT ECOSYSTEM</p>
              <h2>每个领域，都有自己的专业答案。</h2>
              <p>从业务执行到组织治理，探索可组合的产品矩阵。</p>
            </div>
            <span class="product-count">{{ modules.length }} <small>个业务模块</small></span>
          </div>
          <div class="filter-row" role="group" aria-label="筛选产品类别">
            <button
              v-for="group in groups"
              :key="group"
              type="button"
              :class="['filter-button', { 'is-active': activeGroup === group }]"
              :aria-pressed="activeGroup === group"
              @click="activeGroup = group"
            >
              {{ group }}
            </button>
          </div>
          <div class="module-grid">
            <a
              v-for="module in visibleModules"
              :key="module.code"
              class="module-card"
              :href="module.repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="module-card-top">
                <span :class="['module-glyph', `tone-${module.tone}`]">{{
                  module.code.slice(0, 1)
                }}</span
                ><span class="module-link-icon" aria-hidden="true">↗</span>
              </div>
              <div>
                <span class="module-code">{{ module.code }}</span>
                <h3>{{ module.name }}</h3>
                <p>{{ module.description }}</p>
              </div>
              <span class="module-category">{{ module.category }}</span>
            </a>
          </div>
          <a class="driver-link" :href="links.driver" target="_blank" rel="noopener noreferrer"
            ><span class="driver-icon" aria-hidden="true">↗</span
            ><span
              ><strong>业务延伸到移动现场</strong
              ><small>TMS 司机端以 H5 / 微信小程序承接运输执行任务。</small></span
            ><span class="driver-action">查看司机端项目 ↗</span></a
          >
        </div>
      </section>

      <section id="experience" class="showcase-section section-pad">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">BUILT, NOT JUST IMAGINED</p>
            <h2>真实产品，眼见为实。</h2>
            <p>直接看正在构建的业务工作台。以下画面来自项目实际运行环境。</p>
          </div>
          <div class="showcase-layout">
            <div class="showcase-tabs" role="group" aria-label="选择产品实景">
              <button
                v-for="(shot, index) in showcases"
                :key="shot.label"
                type="button"
                :class="['showcase-tab', { 'is-active': activeShowcase === index }]"
                :aria-pressed="activeShowcase === index"
                @click="activeShowcase = index"
              >
                <span class="showcase-number">0{{ index + 1 }}</span
                ><span
                  ><strong>{{ shot.label }}</strong
                  ><small>{{ shot.title }}</small></span
                ><span aria-hidden="true">↗</span>
              </button>
            </div>
            <div class="showcase-view">
              <a
                class="showcase-image"
                :href="`${base}${currentShowcase.image}`"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`查看${currentShowcase.label}截图原图`"
              >
                <img
                  :key="currentShowcase.image"
                  :src="`${base}${currentShowcase.image}`"
                  :width="currentShowcase.width"
                  :height="currentShowcase.height"
                  :alt="currentShowcase.alt"
                  loading="lazy"
                />
              </a>
              <div class="showcase-caption">
                <div>
                  <span>{{ currentShowcase.label }}</span>
                  <h3>{{ currentShowcase.title }}</h3>
                  <p>{{ currentShowcase.description }}</p>
                </div>
                <a
                  :href="links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="打开在线演示"
                  >↗</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" class="architecture-section section-pad">
        <div class="container architecture-layout">
          <div class="architecture-copy">
            <p class="eyebrow">ENGINEERED TO GROW</p>
            <h2>不止好看。<br />从架构开始，认真构建。</h2>
            <p>
              以 Vue 3 与 TypeScript 构建前端，以 Supabase
              承载认证、数据与服务端能力。主平台统一运行时，各业务子仓独立演进。
            </p>
            <div class="architecture-points">
              <span>统一认证与多租户</span><span>模块化 Git 子仓</span><span>数据库级权限控制</span
              ><span>可治理 AI 能力</span>
            </div>
            <a class="text-link" :href="links.docs" target="_blank" rel="noopener noreferrer"
              >阅读技术文档 <span aria-hidden="true">↗</span></a
            >
          </div>
          <div
            class="architecture-diagram"
            aria-label="架构图：各业务模块连接亿企工场平台运行时，平台建立在 Supabase 服务之上"
          >
            <div class="diagram-top">
              <span>SCM</span><span>MES</span><span>WMS</span><span>TMS</span><span>FMS</span
              ><span>HR</span><span>...</span>
            </div>
            <div class="diagram-connector" aria-hidden="true"></div>
            <div class="diagram-host">
              <img :src="`${base}logo.webp`" width="45" height="45" alt="" />
              <div>
                <strong>亿企工场</strong><small>统一运行时 · 权限 · 工作流 · AI 治理</small>
              </div>
            </div>
            <div class="diagram-connector" aria-hidden="true"></div>
            <div class="diagram-base">
              <span>AUTH</span><span>POSTGRESQL</span><span>STORAGE</span><span>REALTIME</span
              ><span>EDGE FUNCTIONS</span>
            </div>
            <p>POWERED BY SUPABASE</p>
          </div>
        </div>
      </section>

      <section class="closing-section">
        <div class="container closing-inner">
          <div class="closing-orbit" aria-hidden="true"></div>
          <p class="eyebrow eyebrow-light">BUILD WHAT'S NEXT</p>
          <h2>让业务连接起来，<br /><span>让下一步更有想象力。</span></h2>
          <p>从产品体验开始，探索亿企工场如何支撑你的业务场景。</p>
          <div class="closing-actions">
            <a
              class="button button-primary"
              :href="links.demo"
              target="_blank"
              rel="noopener noreferrer"
              >立即体验产品 ↗</a
            ><a
              class="button button-outline"
              :href="links.source"
              target="_blank"
              rel="noopener noreferrer"
              >查看开源项目 ↗</a
            >
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-main">
        <div>
          <a class="brand footer-brand" href="#top"
            ><img :src="`${base}logo.webp`" width="38" height="38" alt="" /><span class="brand-text"
              ><strong>亿企工场</strong><small>YIQI WORKSHOP</small></span
            ></a
          >
          <p>一个底座，连接企业业务的每一步。</p>
        </div>
        <div class="footer-links">
          <div>
            <strong>产品</strong><a href="#platform">平台能力</a><a href="#products">产品矩阵</a
            ><a href="#experience">产品实景</a>
          </div>
          <div>
            <strong>资源</strong
            ><a :href="links.demo" target="_blank" rel="noopener noreferrer">在线演示</a
            ><a :href="links.docs" target="_blank" rel="noopener noreferrer">开发文档</a
            ><a :href="links.source" target="_blank" rel="noopener noreferrer">Gitee 开源</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© {{ new Date().getFullYear() }} 亿企工场</span><span>以真实产品连接更多可能</span>
      </div>
    </footer>
  </div>
</template>
