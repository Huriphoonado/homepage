/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled } from 'theme-ui';

const Publications = props => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "publications"}}}) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
        `
    );
    const node = data.allMarkdownRemark.edges[0].node;
    return (
        <div key={node.id}>
            <Styled.h1>{node.frontmatter.title}</Styled.h1>
            <div sx={{
                a: theme => theme.styles.a,
                h1: theme => theme.styles.h1,
                h2: theme => theme.styles.h2,
                h3: theme => theme.styles.h3,
                h4: theme => theme.styles.h4,
                h5: theme => theme.styles.h5,
                h6: theme => theme.styles.h6,
                p: {fontSize:0}}}
                dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
    );
}

export default Publications;
