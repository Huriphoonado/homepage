/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Divider, Styled } from 'theme-ui';

const TopMatter = props => {
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
        <div sx={{mb: 5}}>
            <Styled.h1 sx={{fontSize:[8, 9, 10], fontWeight:"display", mb:0}}>{data.site.siteMetadata.title}</Styled.h1>
            <Styled.h2 sx={{mt:0}}>{data.site.siteMetadata.description}</Styled.h2>
        </div>
        <div sx={{ fontFamily:"heading"}}>
            <div sx={{m: 0, my: 3, '& > p': { m:0 }}}>
                <Styled.h5 sx={{fontWeight:"body", mb:0}}>INTERESTS</Styled.h5>
                <p>{data.site.siteMetadata.interests.professional.join(` • `)}</p>
                <p>{data.site.siteMetadata.interests.personal.join(` • `)}</p>
            </div>
            <Divider sx={{borderColor: "text", width: "32px"}} />
            <div sx={{my: 3, '& > p': { m:0 }}}>
                <Styled.h5 sx={{fontWeight:"body", m:0}}>REACH ME</Styled.h5>
                <p>{data.site.siteMetadata.info.email}</p>
                <p>{data.site.siteMetadata.info.location}</p>
            </div>
        </div>
        </>
    )
}

export default TopMatter;
