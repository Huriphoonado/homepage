/** @jsx jsx */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { jsx } from 'theme-ui';

import Header from './header.js';
import TopMatter from './top-matter.js';
import BioCard from './bio-card.js';
import Projects from './projects.js';
import Publications from './publications.js';
import VideoEmbed from './video.js';
import AudioEmbed from './audio.js';
import Footer from './footer.js';

import ImageLayout from './image-layout.js';

export default function Layout(props) {
    const URLS = ["About", "Projects", "Publications", "Video", "Audio"];

    const data = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `
    );

    return (
    <div className="application"
    sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        variant: 'layout.root',
    }}>
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Header urlList={URLS} />
        <ImageLayout>
        <div id="Top" sx={{pb: 6}}><TopMatter /></div>

        <div id={URLS[0]} sx={{py:6, m:0}}><BioCard /></div>
        <div id={URLS[1]} sx={{py:6, m:0}}><Projects /></div>
        <div id={URLS[2]} sx={{py:6, m:0}}><Publications /></div>
        <div id={URLS[3]} sx={{py:6, m:0}}><VideoEmbed /></div>
        <div id={URLS[4]} sx={{py:6, m:0}}><AudioEmbed /></div>

        </ImageLayout>
        <Footer />
    </div>)
}
