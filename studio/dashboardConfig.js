export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxtjs-events-studio',
                  apiId: '90a8e287-b253-4504-a074-82fc2c3283ab'
                },
                {
                  buildHookId: '602e81d77d184d6f55cc5b5f',
                  title: 'Events Website',
                  name: 'sanity-nuxtjs-events',
                  apiId: 'd4b6e4c0-590e-4f92-a12f-fa1c61685427'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapper01/sanity-nuxtjs-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxtjs-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
