# create-issues-to-repo
自动生成issue到仓库


## 如果变成你的
0. 先吧项目done下来

1. 项目初始化
```diff
npm i pnpm // 没装过pnpm安装一下
pnpm i
```

2. 修改index.ts
找到 REPO_INFO
```ts
const REPO_INFO = {
  owner: "xxx", // 对应的用户名
  repo: "xxx", // 对应的仓库名
};
```

3. 生成action读取的配置文件
```ts
pnpm build
```

4. 生成对应的ACTION TOKEN
- 申请一个 token
- 在 repo 的 Settings 的 Secrets 里添加新的 Secret
> 这里的repo是这个done下来的仓库，要设置在这个仓库
- 点击右上角 New repository secret
- Name TOKEN
- Value 为你申请到的 token

5. 修改template模板
里面就是你要提交的issue内容

# 后记
目前功能比较单一，向某个仓库提交issue，如果想要修改，自己动手！！