/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Embed } from 'theme-ui';

const Video = props => {
    return (
        <div>
        <Styled.h1>Video</Styled.h1>
        <Embed
            src="https://www.youtube.com/embed/videoseries?list=PLpjVHkSreo8ddB03qPR0_z67AhQ1EZTLj"
            frameborder="0"
            color="white"
        />
        </div>
    )
}

export default Video;
