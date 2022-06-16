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
        <main>

        <Top />

        <Container sx={{p:[4, 5, 6]}}>
        <section id={URLS[0]} sx={{my:0, py:5}}><BioCard /></section>
        <Divider />
        <section id={URLS[1]} sx={{my:0, py:5}}><Projects /></section>
        <Divider />
        <section id={URLS[2]} sx={{my:0, py:5}}><Publications /></section>
        <Divider />
        <section id={URLS[3]} sx={{my:0, pt:5}}><MediaEmbed /></section>
        </Container>
        </main>

        <Footer />
    </div>)
}
