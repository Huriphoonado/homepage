/** @jsx jsx */

import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Text, Card, Box, Grid, Image } from "theme-ui";

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

        <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
            return(
                <Grid key={node.id} gap={[0, 3]} columns={[ 1, 1, '1fr 2fr' ]}>
                    <div sx={{position: "relative",}}>
                        <Image alt={node.frontmatter.imageDescription} sx={{
                            display:"block",
                            position:["relative", "relative", "absolute"],
                            top: ["0%", "0%", "50%"],
                            transform: ["translate(-50%, 2%)", "translate(-50%, 0%)", "translate(-50%, -50%)"],
                            left:"50%",
                            marginRight:"-50%",
                            width:["100%", "256px"],
                            objectFit:"cover",
                            borderRadius: ["6px 6px 0px 0px", "6px"],
                        }} src={node.frontmatter.image} />
                    </div>
                    <Card p={[2,4]}>
                        <Styled.h1>About Willie</Styled.h1>
                        <div
                        sx={{
                            a: theme => theme.styles.a,
                            h1: theme => theme.styles.h1,
                            h2: theme => theme.styles.h2,
                            h3: theme => theme.styles.h3,
                            h4: theme => theme.styles.h4,
                            h5: theme => theme.styles.h5,
                            h6: theme => theme.styles.h6,
                        }} dangerouslySetInnerHTML={{ __html: node.html }} />
                    </Card>
                </Grid>
            )
        })}
        </div>
        </div>
    )
}
