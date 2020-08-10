/** @jsx jsx */
import React from "React";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Embed } from 'theme-ui';

const Audio = props => {
    return (
        <div>
        <Styled.h1>Audio</Styled.h1>
        <iframe title="SoundCloud Audio Player" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1107705520&color=%2340a8bc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    )
}

export default Audio;
