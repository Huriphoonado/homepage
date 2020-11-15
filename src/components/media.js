/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Embed, Box, Grid } from 'theme-ui';

const MediaEmbed = props => {
    const data = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    videoEmbed
                }
            }
        }
        `
    );
    return (
        <Grid gap={3} columns={[ 1, 1, '2fr 1fr' ]}>
            <Box>
                <Styled.h2 as="h1">Video Playlist</Styled.h2>
                <Embed
                    src={data.site.siteMetadata.videoEmbed}
                    frameborder="0"
                    color="white"
                />
            </Box>
            <Box>
            <Styled.h2 as="h1">Audio</Styled.h2>
            <iframe title="SoundCloud Audio Player" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1107705520&color=%232ee888&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Box>
        </Grid>
    )
}

export default MediaEmbed;
