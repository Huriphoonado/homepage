/** @jsx jsx */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Container, Divider, useThemeUI } from 'theme-ui';

import Header from './header.js';
import Top from './top.js';
import BioCard from './bio-card.js';
import Projects from './projects.js';
import Publications from './publications.js';
import MediaEmbed from './media.js';
import Footer from './footer.js';

export default function Layout(props) {
    const URLS = ["About", "Projects", "Publications", "Media"];

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

    const { theme } = useThemeUI()

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
            <meta name="theme-color" content={theme.colors.background} />
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Header urlList={URLS} />
        <Top />

        <Container sx={{p:[4, 5, 6]}}>
        <div id={URLS[0]} sx={{my:0, py:5}}><BioCard /></div>
        <Divider />
        <div id={URLS[1]} sx={{my:0, py:5}}><Projects /></div>
        <Divider />
        <div id={URLS[2]} sx={{my:0, py:5}}><Publications /></div>
        <Divider />
        <div id={URLS[3]} sx={{my:0, pt:5}}><MediaEmbed /></div>
        </Container>

        <Footer />
    </div>)
}
