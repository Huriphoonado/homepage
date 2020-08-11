/** @jsx jsx */

import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Text, Box, Grid, Image } from "theme-ui";

export default function BioCard(props) {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "bio"}}}) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            title
                            image
                            imageDescription
                        }
                    }
                }
            }
        }
        `
    );

    return (
        <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
            return(
                <Box bg='muted' key={node.id}>
                    <Grid gap={2} columns={[ 1, 1, 2 ]}>
                        <div m={0} css={{position: "relative"}}>
                            <Image alt={node.frontmatter.imageDescription} sx={{m: 0, p: 0}} src={node.frontmatter.image} />
                            <div sx={{m: 0, p: 0}} css={{position: "absolute",  top: -6, left: 0, width: "100%", height: "100%", boxShadow: "inset 0px -70px 30px -30px rgba(0,0,0,0.7)"}} />
                            <Styled.h1 sx={{m: 0, p: 0, pl: 4, color:"#ffff"}} css={{position: "absolute", bottom:5}}>{node.frontmatter.title}</Styled.h1>
                        </div>
                        <Text sx={{p: 2}}>
                            <div dangerouslySetInnerHTML={{ __html: node.html }} />
                        </Text>
                    </Grid>
                </Box>
            )
        })}
        </div>
    )
}
