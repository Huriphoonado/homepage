/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Divider, Themed, Container } from 'theme-ui';
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
                "fill":"text",
                "stroke":"text",
                "position": ["absolute", "absolute"],
                "right": [0, "min(0px, calc(100vw - 150vh), calc(100vw - 150vh))"],
                "minHeight": ["0px", "400px", "600px"],
                "height":["100vh", "100vh"],
                "visibility":["hidden", "visible"],
                "zIndex":-1}}}
            src="top.svg" alt="" />
        <Container sx={{
            "minHeight": ["0px", "400px", "600px"],
            "height":["100%", "100vh"],
            p:[4,5,6], // 7 if the breakpoint gets right

        }}>
            <div sx={{
                "bottom":0,
                "width":["100%", "60%", "50%"]
            }}>
                <div sx={{mb: 5}}>
                    <Themed.h1>{data.site.siteMetadata.title}</Themed.h1>
                    <Themed.h2 sx={{mt:0, fontSize: [4,5,6]}}>{data.site.siteMetadata.description}</Themed.h2>
                </div>
                <div sx={{ fontFamily:"heading"}}>
                    <div sx={{m: 0, my: 3, '& > p': { m:0 }}}>
                        <h3 sx={t => t.styles.h5}>Interests</h3>
                        <p>{data.site.siteMetadata.interests.professional.join(` • `)}</p>
                        <p>{data.site.siteMetadata.interests.personal.join(` • `)}</p>
                    </div>
                    <Divider sx={{borderColor: "text", width: "32px"}} />
                    <div sx={{my: 3, '& > p': { m:0 }}}>
                        <h3 sx={t => t.styles.h5}>Reach Me</h3>
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
