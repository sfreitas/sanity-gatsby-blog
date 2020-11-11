export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fabf1632cc5d8c56f9af0a7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qq9dqbjh',
                  apiId: 'db14ac24-8fd4-4c3e-972e-267c9f94d41c'
                },
                {
                  buildHookId: '5fabf163d71e97d841eaebd4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-knhu8jd8',
                  apiId: '517595ef-84c6-470f-9763-9fe7b0aa1684'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sfreitas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-knhu8jd8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
