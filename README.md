# 亿企工场官网

亿企工场项目群的独立官方网站，展示统一平台、十大 Web 业务模块、司机协同入口、产品截图与技术架构。官网使用 Vue 3 + TypeScript + Vite，独立构建和部署，不需要主平台登录态或 Supabase 环境变量。

[Gitee](https://gitee.com/art-si/art-supabase-site) · [GitHub](https://github.com/art-si/art-supabase-site) · [主平台](https://gitee.com/art-si/art-supabase-pro) · [在线演示](https://art-si.github.io/art-supabase-pro/) · [产品文档](https://art-si.github.io/art-supabase-doc/) · [English](./README.en.md)

## 展示内容

| 内容     | 当前范围                                                      |
| -------- | ------------------------------------------------------------- |
| 平台介绍 | 统一认证、多租户、权限、审批、公共运行时与 Git 子仓协作       |
| 业务运营 | SCM 供应链、MES 制造、WMS 仓储、TMS 运输、VMS 车辆、PMIS 设备 |
| 组织治理 | FMS 财务、HR 人力资源、SMIS 安全生产                          |
| 基础数据 | MDM 主数据管理                                                |
| 产品实拍 | 运营工作台、运输开单与安全生产截图                            |
| 项目入口 | 主平台源码、在线演示、使用文档、各业务仓与司机端              |

产品矩阵可按业务运营、组织治理和平台底座分类浏览。站点保留独立的产品展示边界，具体业务能力、权限和已接通链路以各仓 README 及当前实现为准。

## 本地开发

要求 Node.js `>= 22.13.0`、pnpm `11.28.2`，与 `package.json` 保持一致。

```powershell
pnpm install
pnpm dev
```

本地地址为 `http://localhost:3022/`。

```powershell
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm preview
```

`pnpm check` 会依次运行 ESLint、格式检查和包含类型检查的生产构建。生产文件输出到受版本控制的 `docs/`。

开发模式默认根路径 `/`；仓库的 `.env.production` 将生产公共路径设为 `/art-supabase-site/`。部署到独立域名根目录时，在构建前设置 `SITE_BASE=/`。主仓运行 `pnpm modules:build -- site` 时把临时产物输出到主仓 `.artifacts/module-builds/`，不改动已提交的 `docs/`。

## 内容维护

- 模块名称、分类、简介和仓库链接：`src/modules.ts`。新增或修改模块时同步更新。
- 页面结构与正文：`src/App.vue`；视觉样式：`src/style.css`。
- 产品截图：`public/`。`dashboard.png`、`order-entry.png`、`safety.png` 分别对应主仓的 `screenshots/02-dashboard.png`、`03-smart-order.png`、`15-smis-emergency-drill-plan.png`。这些是产品历史实拍，当前界面和业务数据以运行版本为准。
- 近期主平台及子仓已扩展供应链、制造、仓储、财务和安全业务。更新展示文案时，分别核对已有页面、实际接通流程和后续计划，不把产品流程示意当作全链路验收结论。

## 发布与主仓协作

本仓不使用 GitHub Actions 发布工作流。可将 GitHub Pages 来源设为 `master` 分支的 `/docs` 目录，或把 `docs/` 部署到其他静态站点服务。Gitee 与 GitHub 保存同一套源码和 README，静态托管由对应部署配置决定。

主平台通过 `modules/art-supabase-site` 子模块固定本仓版本。代码变更按需构建并提交源码与 `docs/`，先推送子仓，再更新主仓指针；主仓的 `pnpm repo:publish -- "提交说明"` 可执行统一构建、提交和推送，使用前先检查工作区范围。

## 许可证

与主项目一致，采用 [MulanPSL-2.0](LICENSE) 许可证。
