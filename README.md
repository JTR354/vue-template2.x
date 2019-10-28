# {{ project }}

> {{ description }}

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and hot-reloads for release

```
npm run release
```

### Compiles and hot-reloads for production

```
npm run prod
```

### Compiles and minifies for development

```
npm run build:dev
```

### Compiles and minifies for release

```
npm run build:release
```

### Compiles and minifies for production

```
npm run build:prod
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


# hygen

```bash
# 创建页面
npm run new page

# 创建组件
npm run new component
- base开头为全局组件
- global为全局组件，其方法挂载在vue实例上
- 其他为普通组件

# 创建vuex公共模块
npm run new module

# 创建utls工具
npm run new util

# 创建api工具
npm run new api
```

# 路由常量池：
> 页面跳转路由请用路由常量 【this.$pages.页面路径】；路由变量名和mpvue一致，方便迁移！！！
```js
this.$router.push(this.$pages.homeDetail)
```

# http工具 使用说明

> 请查看[README_HTTP_HELP.md](./README_HTTP_HELP.md)


# 目录结构
- api 接口
- assets 图片资源
- components 组件
- design 样式
- mixins 全局混入
- pages 页面
- router 路由
- state 全局vuex模块
- utils 工具类
- public 静态资源