export default {
  widgets: [
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
                  buildHookId: '5eb95a9b9b13493c532926ec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ejwrc3sf',
                  apiId: 'c441c13e-2a1a-44f5-899a-06b7b4797903'
                },
                {
                  buildHookId: '5eb95a9b1842f571880a65f1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mkqyjb6d',
                  apiId: '1bfe03f1-dcd8-460e-a804-00fdf815713e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pasqualevitiello/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mkqyjb6d.netlify.app', category: 'apps'}
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
