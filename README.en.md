# Yiqi Workshop Site

The independent product website for the Yiqi Workshop ecosystem, built with Vue 3, TypeScript and Vite. It introduces the shared platform, ten Web business modules, driver collaboration, product screenshots and architecture. It runs without platform authentication or Supabase environment variables.

[Gitee](https://gitee.com/art-si/art-supabase-site) · [GitHub](https://github.com/art-si/art-supabase-site) · [Platform](https://gitee.com/art-si/art-supabase-pro) · [Demo](https://art-si.github.io/art-supabase-pro/) · [Documentation](https://art-si.github.io/art-supabase-doc/) · [简体中文](./README.md)

## Product coverage

| Area                        | Modules and content                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| Operations                  | SCM supply chain, MES manufacturing, WMS warehousing, TMS transport, VMS vehicles and PMIS equipment |
| Organization and governance | FMS finance, HR and SMIS safety                                                                      |
| Foundation                  | MDM master data, identity, tenant scope, permissions, approvals and the shared runtime               |
| Product examples            | Operations dashboard, order entry and safety screenshots                                             |
| Project links               | Platform source, demo, documentation, module repositories and the driver app                         |

The module catalog supports category filtering. Product flow illustrations describe relationships; actual capabilities and connected workflows are documented in each module README.

## Development

Requires Node.js `>= 22.13.0` and pnpm `11.28.2`, as declared in `package.json`.

```powershell
pnpm install
pnpm dev
```

Open `http://localhost:3022/`.

```powershell
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm preview
```

`pnpm check` runs ESLint, formatting checks and the production build, which includes typechecking. Versioned static output is written to `docs/`.

Development defaults to `/`; `.env.production` sets the production base path to `/art-supabase-site/`. Set `SITE_BASE=/` before building for a root domain. The host command `pnpm modules:build -- site` writes temporary output under the host's `.artifacts/module-builds/` directory.

## Content maintenance

Module names, categories, descriptions and repository links live in `src/modules.ts`. Page content is in `src/App.vue`, styles in `src/style.css`, and screenshots in `public/`.

`dashboard.png`, `order-entry.png` and `safety.png` correspond to the host's `screenshots/02-dashboard.png`, `03-smart-order.png` and `15-smis-emergency-drill-plan.png`. These are historical product captures; current screens and data depend on the running revision. Keep descriptions aligned with each module's implementation, distinguishing connected features from planned integration.

## Publishing and collaboration

This repository has no GitHub Actions deployment workflow. Configure GitHub Pages to serve `/docs` from `master`, or deploy `docs/` to another static host. Repository mirroring and static hosting are separate settings.

The platform tracks this repository as `modules/art-supabase-site`. For application changes, build and commit the updated source and static output, push this repository, then update the host's submodule pointer. The host command `pnpm repo:publish -- "commit message"` can build, commit and push changed repositories together; check the workspace scope before using it.

## License

[MulanPSL-2.0](LICENSE)
