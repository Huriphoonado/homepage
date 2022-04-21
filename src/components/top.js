/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Divider, Styled, Container } from 'theme-ui';
import { ReactSVG } from 'react-svg';

const Top = props => {
    const data = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    description
                    info {
                        email
                        location
                    }
                    interests {
                        personal
                        professional
                    }
                    title
                }
            }
        }
        `
    );
    return (
        <>
        <ReactSVG sx={{
            "svg":{
                "fill":"sideImage",
                "stroke":"sideImage",
                "position": ["absolute", "absolute"],
                "right":[0, "min(0px, calc(90vw - 150vh))"],
                "minHeight":["0px", "600px"],
                "height":["100%", "100vh"],
                "visibility":["hidden", "visible"],
                "zIndex":-1}}}
            src="top.svg" />
        <Container sx={{
            "minHeight":["0px", "600px"],
            "height":["100%", "100vh"],
            p:[4,5,6], // 7 if the breakpoint gets right

        }}>
            <div sx={{
                "bottom":0,
                "width":["100%", "60%", "50%"]
            }}>
                <div sx={{mb: 5}}>
                    <Styled.h1 sx={{fontSize:[8, 9, 10], fontWeight:"display", mb:0}}>{data.site.siteMetadata.title}</Styled.h1>
                    <Styled.h2 sx={{mt:0}}>{data.site.siteMetadata.description}</Styled.h2>
                </div>
                <div sx={{ fontFamily:"heading"}}>
                    <div sx={{m: 0, my: 3, '& > p': { m:0 }}}>
                        <Styled.h5 as="h3" sx={{fontWeight:"body", fontVariantCaps: "all-small-caps", mb:0}}>Interests</Styled.h5>
                        <p>{data.site.siteMetadata.interests.professional.join(` • `)}</p>
                        <p>{data.site.siteMetadata.interests.personal.join(` • `)}</p>
                    </div>
                    <Divider sx={{borderColor: "text", width: "32px"}} />
                    <div sx={{my: 3, '& > p': { m:0 }}}>
                        <Styled.h5 as="h3" sx={{fontWeight:"body", fontVariantCaps: "all-small-caps", m:0}}>Reach Me</Styled.h5>
                        <p>{data.site.siteMetadata.info.email}</p>
                        <p>{data.site.siteMetadata.info.location}</p>
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Top;
