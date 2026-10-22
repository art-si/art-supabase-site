# 亿企工场官网

亿企工场项目群的独立官方网站。站点展示统一平台、业务模块、真实产品截图与技术架构，不依赖主平台的登录态或 Supabase 环境变量。

## 项目位置

- 官网子仓：`modules/art-supabase-site`
- Gitee：https://gitee.com/art-si/art-supabase-site
- 主平台：https://gitee.com/art-si/art-supabase-pro
- 在线演示：https://art-si.github.io/art-supabase-pro/
- 产品文档：https://art-si.github.io/art-supabase-doc/

## 本地开发

需要 Node.js 22+ 与 pnpm 11.9+。

```powershell
pnpm install
pnpm dev
```

本地地址：`http://localhost:3022/`。

```powershell
pnpm typecheck
pnpm format:check
pnpm build
pnpm preview
```

生产文件输出到受 Git 管理的 `docs/`，与其他业务子仓一致。构建后将源码和更新后的 `docs/` 一起提交。默认站点路径是 `/art-supabase-site/`；部署到独立域名根目录时，设置 `SITE_BASE=/` 后重新构建。主仓运行 `pnpm modules:build -- site` 时会把临时产物输出到主仓 `.artifacts/module-builds/`，不改动已提交的 `docs/`。

## 内容维护

- 模块名称、简介和仓库链接：`src/modules.ts`。新增或修改子仓后同步更新此文件。
- 页面结构与正文：`src/App.vue`；视觉样式：`src/style.css`。
- 产品截图：`public/`。`dashboard.png`、`order-entry.png`、`safety.png` 分别对应主仓的 `screenshots/02-dashboard.png`、`03-smart-order.png`、`15-smis-emergency-drill-plan.png`。更新时同步检查替代文本和内容描述。
- 官网只介绍现有能力及建设方向。MES、WMS 等仍在建设的业务，不用“已上线”等措辞代替真实状态。

## 发布

本仓不使用 GitHub Actions 发布工作流。`master/docs` 是静态站点发布目录；镜像到 GitHub 后可将该目录设为 Pages 来源，也可将 `docs/` 部署到其他静态站点服务。主仓统一发布时执行 `pnpm repo:publish -- "提交说明"`，会重新构建并提交所有有改动的子仓及主仓。

## 许可证

与主项目保持一致，采用 [MulanPSL-2.0](LICENSE) 许可证。
