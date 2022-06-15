module.exports = {
    siteMetadata: {
        title: `Willie Payne`,
        description:`PhD Candidate in Music Technology at NYU`,
        interests: {
            professional: [`Creative Expression`, `Accessibility`, `CS Ed`],
            personal: [`Comics`, `Coffee`, `Running`, `New Music`, `New Fiction`]
        },
        info: {
            location:`Upper West Side, NYC`,
            email: `william [dot] payne [at] nyu [dot] edu`
        },
        otherSites: [
            {name: `github`, url: `https://github.com/Huriphoonado`},
            {name: `Ability Project`, url: `https://wp.nyu.edu/ability/team/`},
            {name: `Music + Audio Research Lab`, url: `https://steinhardt.nyu.edu/marl/about/team`},
        ],
        githubURL: `https://github.com/Huriphoonado`,
        videoEmbed:`https://www.youtube.com/embed/videoseries?list=PLpjVHkSreo8c_bC4di4vdy_NdX_nEM8sT`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-json`,
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
