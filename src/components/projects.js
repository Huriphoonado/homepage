/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Box, Flex, Grid, Themed, Text, Embed, Divider, Card, Button, Link } from 'theme-ui';

const Projects = props => {
    const data = useStaticQuery(
        graphql`
        query MyQuery {
          allProjectsJson {
            edges {
              node {
                collaborators
                description
                title
                year
                video
                tags
                id
                links
              }
            }
          }
        }
        `
    );

    return (
        <>
        <Themed.h2>Selected Projects</Themed.h2>

        <div
            sx={{
                display: 'grid',
                gridGap: 3,
                    gridTemplateColumns: [`repeat(auto-fit, minmax(100%, 1fr))`, `repeat(auto-fit, minmax(380px, 1fr))`],
        }}>

        {data.allProjectsJson.edges.map(({ node }) => {
            let title, description, subDescription, video; // Required
            let collaborators, links;

            title = <Themed.h3 sx={{mb:0, mt: 1}}>{node.title}</Themed.h3>;

            subDescription = <div sx={{mb:3, mt:0}}>
                                <Text role="doc-subtitle" sx={t => t.styles.h6}>{node.year}
                                <span sx={{color:"primary"}}> / </span>{node.tags.join(", ")}
                                </Text>
                            </div>;

            description = <div sx={{mb:2}}><Text>{node.description}</Text></div>;

            video = <div sx={{overflow: 'hidden', borderRadius: '6px'}}><Embed
                        src={node.video}
                        frameBorder="0"
                        color="white"
                    /></div>;

            if (node.collaborators.length) {
                collaborators = <>
                    <Flex><h4 sx={t => t.styles.h7}>Collaborators</h4></Flex>
                    <Flex><Text sx={{fontSize:1}}>
                    {node.collaborators.map(
                        (c, i) => {
                            if (i == node.collaborators.length - 1) {
                                return <Link target='_blank' href={c[1]}>{c[0]}</Link>
                            }
                            else return <><Link target='_blank' href={c[1]}>{c[0]}</Link>, </>
                        })}
                    </Text></Flex>
                </>;
            }
            else collaborators = <></>;

            if (node.links.length) {
                links = <>
                    <Flex><h4 sx={t => t.styles.h7}>Links</h4></Flex>
                    <Flex><Text sx={{fontSize:1}}>
                    {node.links.map(
                        (l, i) => {
                            if (i == node.links.length - 1) {
                                return <Link target='_blank' href={l[1]}>{l[0]}</Link>
                            }
                            else return <><Link target='_blank' href={l[1]}>{l[0]}</Link>, </>
                        })}
                    </Text></Flex>
                </>;
            }
            else links = <></>;

            return (
                <Card sx={{ p: [2, 4, 4] }} key={node.id}>
                    {title}
                    {subDescription}
                    {description}
                    {video}
                    <Grid sx={{mt: 2}} gap={1} columns='1fr 2fr'>
                        {collaborators}
                        {links}
                    </Grid>
                </Card>
            )

        })}

        </div>
        </>
    );
}

export default Projects;
