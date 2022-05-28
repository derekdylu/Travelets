# Travelets

## Frontend
### Getting started
update or intall @vue/cli by following the [official site](https://cli.vuejs.org/guide/installation.html). Also be sure that Node.js is up to date. Vue CLI 4.x requires Node.js version 8.9 or above (v10+ recommended).

```sh
# IN YOUR TERMINAL

npm uninstall vue-cli -g
# OR
yarn global remove vue-cli

# THEN
yarn global add @vue/cli

# VERSION
vue --version
```

### Install Requiremnets
```bash
cd Travelets/frontend
yarn install
npm install vuex@next --save
```

### Run Devlopment Server
```bash
# IN ROOT DIRECTORY
yarn frontend

# IN FRONTEND DIRECTORY
yarn serve
```
### Run Unit test (incorrect)
```bash
# IN ROOT DIRECTORY
vue add unit-jest
npm install vue-template-compiler
npm install @vue/test-utils --save-dev
npm install --save-dev babel-jest @babel/core @babel/preset-env

```