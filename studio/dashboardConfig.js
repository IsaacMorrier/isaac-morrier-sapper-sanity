export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '6117eda98af9b50f3b84a87f',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-r1mdn7jh',
                  apiId: '1e4ff5ad-7223-45e7-983c-e8c204aed9b5'
                },
                {
                  buildHookId: '6117eda9f3aafefda4e144d4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-uu5c1aez',
                  apiId: 'b36b8fbd-d6e0-4b24-8cbe-819f253de651'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IsaacMorrier/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-uu5c1aez.netlify.app', category: 'apps'}
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
