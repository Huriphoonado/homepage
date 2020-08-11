module.exports = {
    siteMetadata: {
        title: `Willie Payne`,
        description:`PhD Candidate in Music Technology at NYU`,
        interests: {
            professional: [`Creative Coding`, `CS Education`, `Accessibility`],
            personal: [`Comics`, `Coffee`, `Running`, `Rock`, `Literary Fiction`]
        },
        info: {
            location:`Upper West Side, NYC`,
            email: `william [dot] payne [at] nyu [dot] edu`
        },
        githubURL: `https://github.com/Huriphoonado`,
        videoEmbed:`https://www.youtube.com/embed/videoseries?list=PLpjVHkSreo8ddB03qPR0_z67AhQ1EZTLj`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Crimson Pro', 'Liu Jian Mao Cao']
                },
                typekit: { id: 'ylw0uzf' }
            }
        },
        'gatsby-plugin-theme-ui',
        `gatsby-plugin-react-helmet`
    ],
}
