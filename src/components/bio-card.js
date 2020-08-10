/** @jsx jsx */

import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Text, Box, Grid, Image } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";

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
                        }
                    }
                }
            }
        }
        `
    );

    // Create a vertical or horizontal card with different styling
    // based on screen size
    let breakpoint = (useBreakpointIndex() >= 2) * 1;

    return (
        <div id={props.id}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
            const card1 = (
                <Box bg='muted' key={node.id}>
                    <Grid gap={2} columns={[ 1, 1, 2 ]}>
                        <div m={0} css={{position: "relative"}}>
                            <Image sx={{m: 0, p: 0}} src={node.frontmatter.image} />
                            <div sx={{m: 0, p: 0}} css={{position: "absolute",  top: -6, left: 0, width: "100%", height: "100%", boxShadow: "inset 0px -70px 30px -30px rgba(0,0,0,0.7)"}} />
                            <Styled.h1 sx={{m: 0, p: 0, pl: 4, color:"#ffff"}} css={{position: "absolute", bottom:5}}>{node.frontmatter.title}</Styled.h1>
                        </div>
                        <Text sx={{p: 2}}>
                            <div dangerouslySetInnerHTML={{ __html: node.html }} />
                        </Text>
                    </Grid>
                </Box>
            )

            const card2 = (
                <Box bg='muted' key={node.id}>
                    <Grid gap={2} columns={[ 1, 1, 2 ]}>
                        <Image sx={{minHeight:"496px", objectFit: "cover"}} src={node.frontmatter.image} />
                        <Text sx={{p: 2}}>
                            <Styled.h1>{node.frontmatter.title}</Styled.h1>
                            <div dangerouslySetInnerHTML={{ __html: node.html }} />
                        </Text>
                    </Grid>
                </Box>
            )

        return ([card1, card2][breakpoint])
        })}
        </div>
    )
}
