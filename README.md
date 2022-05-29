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
### Run Unit test 
```bash
# IN FRONTEND DIRECTORY

vue add unit-jest
npm run test:unit

```