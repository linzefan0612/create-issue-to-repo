# create-issues-to-repo
自动生成issue到仓库


## 如果变成你的

1. 项目初始化
```diff
npm i pnpm // 没装过pnpm安装一下
pnpm i
```

2. 修改index.ts
找到 REPO_INFO
```ts
const REPO_INFO = {
  owner: "xxx", // 你的用户名
  repo: "xxx", // 你的仓库名
};
```

3. 生成action读取的配置文件
```ts
pnpm build
```

4. 生成对应的ACTION TOKEN