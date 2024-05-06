module.exports = {
    siteMetadata: {
        title: `Willie Payne`,
        description:`Assistant Professor at UNC-Chapel Hill`,
        interests: {
            professional: [`Creative Expression`, `Accessibility`, `CS Ed`],
            personal: [`Comics`, `Coffee`, `Running`, `New Music`, `New Fiction`]
        },
        lastUpdated: '2024',
        info: {
            location:`Chapel Hill, NC`,
            email: `william [dot] payne [at] unc [dot] edu`
        },
        otherSites: [
            {name: `github`, url: `https://github.com/Huriphoonado`},
            {name: `SILS`, url: `https://sils.unc.edu/` },
            {name: `Ability Project`, url: `https://wp.nyu.edu/ability/team/`},
            {name: `FMDG Music School`, url: `https://fmdgmusicschool.org/faculty-staff/` },
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
                typekit: { id: 'vsx8uaw' }
            }
        },
        'gatsby-plugin-theme-ui',
        `gatsby-plugin-react-helmet`
    ],
}
