/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Grid, Styled, Text, Divider, Card, Button, Link } from 'theme-ui';

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
            <Styled.h1>Projects</Styled.h1>
            <div
            sx={{
                display: 'grid',
                gridGap: 3,
                gridTemplateColumns: `repeat(auto-fit, minmax(256px, 1fr))`,
            }}>
                {data.allProjectsJson.edges.map(({ node }) => {
                    let title, description, subDescription; // Required
                    let collaborators, links;

                    title = <Styled.h3 as="h2" sx={{mb:0}}>{node.title}</Styled.h3>;
                    subDescription = <Styled.h6 as="h3" sx={{mt:0, mb:4}}>{node.year} <span sx={{color:"primary"}}>/</span> {node.tags.join(", ")}</Styled.h6>
                    description = <Text>{node.description}</Text>;

                    if (node.collaborators.length) {
                        collaborators = <>
                        <Styled.h6 as="h3" sx={{mb:2}}>Collaborators</Styled.h6>
                        <Text sx={{fontSize:1}}>
                        {node.collaborators.map(
                            (c, i) => {
                                if (i == node.collaborators.length - 1) {
                                    return <Link target='_blank' href={c[1]}>{c[0]}</Link>
                                }
                                else return <><Link target='_blank' href={c[1]}>{c[0]}</Link>, </>
                            })}
                        </Text>
                        </>;
                    }
                    else collaborators = <></>;

                    if (node.links.length) {
                        links = <>
                        <Styled.h6 as="h3" sx={{mb:2}}>Links</Styled.h6>
                        {node.links.map(
                            l => <Button onClick={e=>{window.open(l[1],'_blank'); return false;}}
                            sx={{m: 1}}>{l[0]}
                            </Button>)
                        }
                        </>;
                    }

                    return (
                        <Card sx={{p:3}} key={node.id}>
                            {title}
                            {subDescription}
                            {description}
                            {collaborators}
                            {links}
                        </Card>
                    )
                })}
            </div>
        </>
    );
}

export default Projects;
