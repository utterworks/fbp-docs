const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'UW Fast BERT Plus',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Utterworks Fast BERT Plus",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  base: '/fbp-docs/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Sign up',
        link: 'https://fbp.fluent.utterworks.com'
      }
    ],
    sidebar: [
        {
          path: '/guide/',
          title: 'Introduction',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            '/guide/',
          ]
        },
        {
          title: 'Take a Tour',
          children: [ 
            '/guide/getting-started/01-dashboard',
            '/guide/getting-started/02-project-details',
            '/guide/getting-started/03-project-operations',
            '/guide/getting-started/04-project-groups'
          ],
          initialOpenGroupIndex: -1 
        },
        {
          title: 'User Guide',
          children: [ 
            '/guide/user-guide/01-create-new-project',
            '/guide/user-guide/02-import-a-dataset',
            '/guide/user-guide/03-maintain-deployment-configuration',
            '/guide/user-guide/04-administration'
          ],
          initialOpenGroupIndex: -1 
        }
      ],
  },
  
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
