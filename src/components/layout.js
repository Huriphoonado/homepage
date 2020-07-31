/** @jsx jsx */
import { jsx } from 'theme-ui';

import Header from './header.js';
import Footer from './footer.js';
import ImageLayout from './image-layout.js';

export default function Layout(props) {
  return (<div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}>
    <Header />
    <ImageLayout>
    <h1>Welcome!</h1>
    <p>Willie Payne is a PhD Candidate in Music Technology at NYU, the Accessible Music Technology Fellow at the Filomen M. D’Agostino Greenberg (FMDG) Music School, and the Research Assistant for the NSF funded project Dancing Across Boundaries!. He is invested in developing holistic, creative tools that enable others to express themselves on their own terms and to build confidence and self worth through positive experiences enacting original art. He has published articles in peer-reviewed journals and conferences including ASSETS (Computers and Accessibility), NIME (New Interfaces for Musical Expression), and MOCO (Movement and Computing). Previously, he studied at CU Boulder where he completed degrees in Computer Science (BS/MS) and Music Composition (BM) and was honored with the distinction Outstanding Graduate of the College of Engineering.</p>

    <p>He still has not finished building this website...</p>

    </ImageLayout>

  </div>)
}
