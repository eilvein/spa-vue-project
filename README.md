# Spa-Vue-Project

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

#### 开发环境

```
yarn serve
```

#### 本地环境

```
yarn serve-loacl
```

### Compiles and minifies for production

#### 测试环境

```
yarn build-release
```

#### 预发布换

```
yarn build-beta
```

#### 生产环境

```
yarn build
```

#### 版本 tag 生成

```
git checkout master
git pull orgin master
git fetch origin --prune
yarn run version
yarn run push
```

### Lints and fixes files

```
yarn lint
```

### 优雅的提交你的 Git Commit Message

> 为了 Git Commit 标准化，项目增加了 [commitizen](https://github.com/commitizen/cz-cli)(git-cz)

```
yarn commit
```

#### type

| type     | 用于说明 commit 的提交性质                                                             |
| -------- | -------------------------------------------------------------------------------------- |
| fix      | 修复一个 bug                                                                           |
| feat     | 新增一个功能                                                                           |
| docs     | 文档变更                                                                               |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）                                       |
| refactor | 代码重构                                                                               |
| perf     | 改善性能                                                                               |
| test     | 测试                                                                                   |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具                                                                 |
| revert   | 代码回退                                                                               |

### Customize configuration

### Rem+VW 移动端适配

```
# html5
@import './assets/styles/app'
# web
@import './assets/styles/index'
```

See [Configuration Reference](https://cli.vuejs.org/config/).
