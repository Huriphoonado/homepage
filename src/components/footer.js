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
                    otherSites {
                        name
                        url
                    }
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
             {data.site.siteMetadata.otherSites.map((node, idx) => {
                 let keyName = 'externalSite' + idx;
                 return (
                     <NavLink key={keyName} to={node.url} target="_blank" href={node.url} sx={{ variant: 'styles.navlink', p: 2 }}>
                         {node.name}
                     </NavLink>
                 )
             })}
            <div sx={{ mx: 'auto' }} />
            <div sx={{ p: 2, fontSize: 3, fontFamily:'writing' }}>{data.site.siteMetadata.title} - 2022</div>
        </footer>
    )
}
