/** @jsx jsx */
import { jsx } from 'theme-ui';

import Header from './header.js';
import TopMatter from './top-matter.js';
import BioCard from './bio-card.js';
import Projects from './projects.js';
import Publications from './publications.js';
import Video from './video.js';
import Audio from './audio.js';
import Footer from './footer.js';

import ImageLayout from './image-layout.js';

export default function Layout(props) {
    const URLS = ["About", "Projects", "Publications", "Video", "Audio"];

    return (
    <div
    sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        variant: 'layout.root',
    }}>
        <Header urlList={URLS} />
        <ImageLayout>
        <div id="Top" sx={{pb: 6}}><TopMatter /></div>

        <div id={URLS[0]} sx={{py:6, m:0}}><BioCard /></div>
        <div id={URLS[1]} sx={{py:6, m:0}}><Projects /></div>
        <div id={URLS[2]} sx={{py:6, m:0}}><Publications /></div>
        <div id={URLS[3]} sx={{py:6, m:0}}><Video /></div>
        <div id={URLS[4]} sx={{py:6, m:0}}><Audio /></div>

        </ImageLayout>
        <Footer />
    </div>)
}
