# Structure

This is how folders and files should be structured to
mantain an order and an easy navigation.

```md
/dog-and-pony-challenge
├── /.vscode - settings & extensions for vscode in case you use it
├── /.generate - settings and extensions for plop generate new components
├── /.storybook - settings and extensions for storybook
├── /docs
| ├── structure.md - folder & files structures used in projecet
| └── ...
└── /src
|   ├── /app
|   |   ├── page.tsx
|   |   ├── layout.tsx
|   |   └── ...
|   ├── /layouts - templates used in pages
|   ├── /shared - main components
|   ├── /core - logic & others integrations
|   ├── /styles - tailwind global imports
|   ├── /types - types & zod shapes
└───└── /ui - base components using design system
```
