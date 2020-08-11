/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled, Embed } from 'theme-ui';

const VideoEmbed = props => {
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
        <div>
        <Styled.h1>Video</Styled.h1>
        <Embed
            src={data.site.siteMetadata.videoEmbed}
            frameborder="0"
            color="white"
        />
        </div>
    )
}

export default VideoEmbed;
