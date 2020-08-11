/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Grid, Styled } from 'theme-ui';

const Projects = props => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
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
    return (
        <>
            <Styled.h1 sx={{mb:1}}>Current Projects</Styled.h1>
            <Grid gap={4}columns={[1, 1, 2]}>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                        <div key={node.id}>
                            <Styled.h4>{node.frontmatter.title}</Styled.h4>
                            <div sx={{
                                a: theme => theme.styles.a,
                                h1: theme => theme.styles.h1,
                                h2: theme => theme.styles.h2,
                                h3: theme => theme.styles.h3,
                                h4: theme => theme.styles.h4,
                                h5: theme => theme.styles.h5,
                                h6: theme => theme.styles.h6,
                            }} dangerouslySetInnerHTML={{ __html: node.html }} />
                        </div>
                    )
                })}
            </Grid>
        </>
    );
}

export default Projects;
