/** @jsx jsx */
import { jsx, Text, NavLink } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby";

export default function Footer(props) {
    const data = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                    githubURL
                }
            }
        }
        `
    );
    return (
        <footer
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                p: 20,
                variant: 'styles.footer',
                zIndex: 100,
                bg:"background"
            }}>
            <NavLink to={data.site.siteMetadata.githubURL} target="_blank" href={data.site.siteMetadata.githubURL} sx={{ variant: 'styles.navlink', p: 2 }}>
                GitHub
            </NavLink>
            <div sx={{ mx: 'auto' }} />
            <div sx={{ p: 2, fontSize: 3, fontFamily:'writing' }}>{data.site.siteMetadata.title} - 2022</div>
        </footer>
    )
}
