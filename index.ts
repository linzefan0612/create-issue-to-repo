/*
 * @Author: Lin zefan
 * @Date: 2022-03-18 10:42:58
 * @LastEditTime: 2022-03-18 15:05:40
 * @LastEditors: Lin zefan
 * @Description:
 * @FilePath: \create-issues\index.ts
 *
 */

// import { Octokit } from "octokit";
// import dayjs from "dayjs";
// import fs from 'fs'
const { Octokit } = require("octokit");
const core = require("@actions/core");
const dayjs = require("dayjs");
const fs = require("fs");

const auth = core.getInput("token");
const octokit = new Octokit({ auth });

// 定义项目通用参数
const REPO_INFO = {
  owner: "linzefan0612", // 对应用户名
  repo: "every-day-list", // 对应仓库名
};

function getTitle() {
  return dayjs().format("YYYY-MM-DD") + "清单";
}

function getBody() {
  return fs.readFileSync("template.md", "utf-8").toString();
}

function createIssue() {
  octokit.rest.issues.create({
    ...REPO_INFO,
    title: getTitle(),
    body: getBody(),
  });
}
// 获取仓库所有issues
async function getAllIssues() {
  return await octokit.paginate(octokit.rest.issues.listForRepo, {
    ...REPO_INFO,
    per_page: 100,
  });
}
getAllIssues()
  .then((data) => {
    if (data && data.length) {
      let issuesList = data.map((issue) => issue.title);
      const title = getTitle();
      // 没有重复标题就创建
      if (!issuesList.includes(title)) {
        console.log("创建成功，标题是：", title);
        createIssue();
      } else {
        console.log("已经创建过issue了", title);
      }
    } else {
      createIssue();
    }
  })
  .catch((err) => {
    console.log(err);
  });
