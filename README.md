# poc-components
This repository contains Shared JS components based on patternfly 4 components and guidelines.

## What kind of components

Components should follow these rules:
- should be dumb. This means that they should focus on UI, acccept props (if needed) and not include/change state (if possible).
- no router
- no complex hooks/state
- all human strings must be rewritable by props 
- do not pollute global CSS - it must apply to a specific component only 
- a component should have a story and a test

## Translations

This repository doesn't contain any translations. But all human facing strings in a component must be rewritable by props to allow any project to use translations.

### How to run storybook

```
npm install

npm run build-storybook

npm run storybook
```
Storybook will run automatically in http://localhost:6006/

### How to run build and publish

`tsc ; npm publish`

### How to run test
```
npm install

npm run test
```
### How to run linter
`npm run lint`

### Future plans
- Add traanslations via lingui
- Add GH actions to test PRs
- Add GH actions to auto-build and release
 
### How to use

Install a dependency via npm

`npm install @himdel/poc-components`

Any component can be imported either from index file 
`import { Error404 } from '@himdel/poc-components';` or its file
`import { Error404 } from '@himdel/poc-components/dist/Error404';`
