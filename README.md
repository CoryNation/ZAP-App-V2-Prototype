# ZAP App Starter (Next.js 15 + MUI v6 + Supabase)

This starter matches the Master Requirements & Strategy. It ships with:
- App Router + Material UI v6 + Emotion SSR cache
- Reusable `AppShell` with **Material Design Navigation Drawer**
- Supabase SSR client helpers and typed service layer
- Example modules: **Home**, **Operations → Line Speed**, **Requests**
- SQL seed for initial tables + **RLS** examples

## Quick Start
```bash
pnpm i   # or npm i / yarn
cp .env.local.example .env.local
# fill in Supabase keys
pnpm dev
```

## Structure
```
src/
  app/
    layout.tsx
    page.tsx
    (app)/shell/AppShell.tsx
    (app)/shell/ThemeRegistry.tsx
    operations/line-speed/page.tsx
    requests/page.tsx
  components/
    nav/DrawerNav.tsx
    common/KpiTile.tsx
  lib/
    supabase/client.ts
    supabase/server.ts
    types.ts
    services/lineSpeedService.ts
    services/workRequestService.ts
  styles/
    globals.css
sql/
  001_init.sql
  002_rls.sql
```
