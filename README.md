This Turborepo includes the following packages/apps:

### Apps and Packages

- `apps/e-commerce`: [Next.js](https://nextjs.org/) app
- `packages/config`: app configurations
- `packages/database`: db configurations
- `packages/features`: app modules
- `packages/ui`: react component library
- `packages/utils`: app/features utils

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm install
pnpm dev
```

### Database

To prepare database, run the following command:

```
pnpm generate
pnpm db:migrate:dev
pnpm db:push
pnpm db:seed
```

### Codebase

To check codebase, run the following command:

```
pnpm format
pnpm lint
```
