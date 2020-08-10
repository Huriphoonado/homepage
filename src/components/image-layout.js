/** @jsx jsx */
import { jsx, Container, Image, Grid } from 'theme-ui';
import { ReactSVG } from 'react-svg';

const ImageLayout = props => (
    <Container p={5}>
        <Grid gap={[2, 2, 4]} columns={[1, '3fr 2fr']}>
            <main sx={{mx:"auto"}}>
            { props.children }
            </main>
            <aside>
                <ReactSVG sx={{
                    "svg":{
                        "fill":"sideImage",
                        "stroke":"sideImage",
                        "position": ["relative", "fixed"],
                        "bottom": 0,
                        "right": [0, "calc(35% - 512px)"],
                        "width": ["100%", "max(512px, 35%)"],
                        "zIndex": [-1, 2, 2],}}}
                src="Sketch.svg" />
            </aside>
        </Grid>
    </Container>
)

export default ImageLayout;
