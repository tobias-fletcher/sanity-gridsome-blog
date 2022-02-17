export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '620d9f09864c15009456e052',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3vr8te2r',
                  apiId: '14f38268-1cc5-4160-8f82-a48cdbf05f4f'
                },
                {
                  buildHookId: '620d9f0950560500bc87121a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-bq6y5iys',
                  apiId: 'e804fafd-ba19-4af3-9510-01aefc0c42cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tobias-fletcher/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-bq6y5iys.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
