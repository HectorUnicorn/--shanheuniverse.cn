import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "山河-大学学习指南",
  description: "山河宇宙学习指南",
  lang: "zh_CN",
  themeConfig: {
    logo: "/shanhelogo.png",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "‘愿’系设置", link: "/zh/college-design" },
      { text: "学习工具", link: "/zh/tools/index" },
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // 定制label - https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    darkModeSwitchLabel: "显示亮色/暗夜模式",
    lightModeSwitchTitle: "切换亮色模式",
    darkModeSwitchTitle: "切换暗夜模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    sidebar: [
      {
        text: "学校指南",
        items: [
          { text: "“伴学”理念", link: "/zh/principle"},
          { text: "‘愿’系设置", link: "/zh/college-design" },
          { text: "职业选择", link: "/zh/career-guide" },
          {
            text: "课程设置",
            link: "/zh/course/index",
            items: [{ text: "量子力学", link: "/zh/course/quantum/index" }],
          },
        ],
      },
      {
        text: "学生能力指南",
        items: [
          { text: "求知欲", link: "/zh/knowledge-pursuing" },
          { text: "能力建设", link: "/zh/ability" },
          { text: "认知提升", link: "/zh/cognition-improve" },
          { text: "研究", link: "/zh/research" },
        ],
      },
      {
        text: "所有学院",
        items: [
          {
            text: "人文与社会科学学院",
            link: "/zh/college/shss/index",
            items: [
              { text: "语言文学学院", link: "/zh/college/shss/sll/index" },
              { text: "历史与考古学院", link: "/zh/college/shss/sha/index" },
              { text: "哲学与宗教学院", link: "/zh/college/shss/spr/index" },
              { text: "法学院", link: "/zh/college/shss/sl/index" },
              {
                text: "政治与国际关系学院",
                link: "/zh/college/shss/spir/index",
              },
              { text: "社会科学学院", link: "/zh/college/shss/sss/index" },
              { text: "经济与管理学院", link: "/zh/college/shss/sem/index" },
            ],
          },
          {
            text: "自然科学学院",
            link: "/zh/college/sns/index",
            items: [
              { text: "数学与统计学院", link: "/zh/college/sns/smas/index" },
              { text: "物理学院", link: "/zh/college/sns/sp/index" },
              { text: "化学学院", link: "/zh/college/sns/sc/index" },
              {
                text: "生物与生命科学学院",
                link: "/zh/college/sns/sbls/index",
              },
              { text: "地球科学学院", link: "/zh/college/sns/sess/index" },
            ],
          },
          {
            text: "工程技术学院",
            link: "/zh/college/set/index",
            items: [
              { text: "机械与自动化学院", link: "/zh/college/set/smae/index" },
              {
                text: "材料科学与工程学院",
                link: "/zh/college/set/smse/index",
              },
              {
                text: "电气与电子工程学院",
                link: "/zh/college/set/seee/index",
              },
              {
                text: "信息与计算机学院",
                link: "/zh/college/set/sice/index",
                items: [
                  {
                    text: "计算机科学与技术",
                    link: "/zh/college/set/sice/computer-sience/index",
                  },
                ],
              },
              { text: "航空航天学院", link: "/zh/college/set/sae/index" },
              {
                text: "环境与能源工程学院",
                link: "/zh/college/set/seee2/index",
              },
            ],
          },
          {
            text: "医药与健康科学学院",
            link: "/zh/college/smhs/index",
            items: [
              {
                text: "基础医学与生命健康学院",
                link: "/zh/college/smhs/sbmlh/index",
              },
              { text: "临床医学学院", link: "/zh/college/smhs/scm/index" },
              { text: "药学院", link: "/zh/college/smhs/sp/index" },
              { text: "生物医学工程学院", link: "/zh/college/smhs/sbme/index" },
              {
                text: "健康与运动科学学院",
                link: "/zh/college/smhs/shss/index",
              },
            ],
          },
          {
            text: "农业与环境学院",
            link: "/zh/college/saes/index",
            items: [
              { text: "农业科学学院", link: "/zh/college/saes/sas/index" },
              { text: "食品科学学院", link: "/zh/college/saes/sfs/index" },
              { text: "环境与生态学院", link: "/zh/college/saes/sees/index" },
            ],
          },
          {
            text: "跨学科与新兴领域学院",
            link: "/zh/college/sief/index",
            items: [
              { text: "创新与创业学院", link: "/zh/college/sief/sie/index" },
              { text: "可持续发展学院", link: "/zh/college/sief/ssd/index" },
              {
                text: "跨学科科学与工程学院",
                link: "/zh/college/sief/sise/index",
              },
            ],
          },
          {
            text: "艺术与设计学院",
            link: "/zh/college/sad/index",
            items: [
              { text: "艺术设计", link: "/zh/college/sad/index" },
              { text: "表演艺术", link: "/zh/college/sad/index" },
              { text: "数字媒体艺术", link: "/zh/college/sad/index" },
              { text: "影视制作与传播", link: "/zh/college/sad/index" },
            ],
          },
          {
            text: "教育学院",
            link: "/zh/college/se/index",
            items: [
              { text: "教育学", link: "/zh/college/se/index" },
              { text: "教育技术学", link: "/zh/college/se/index" },
              { text: "心理与教育测量", link: "/zh/college/se/index" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/HectorUnicorn/shanheuniverse.cn",
      },
    ],
    footer: {
      copyright: 'Copyright © 2022-2023 北京述思网络科技有限公司',
      message: '<a href="https://beian.miit.gov.cn">京ICP备2023032385号-3</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802043470">京公网安备11010802043470号</a>',
    }
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh_CN",
    },
    zh: {
      label: "中文",
      lang: "zh_CN", // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: "/index", // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      // 其余 locale 特定属性...
    },
  },
});
