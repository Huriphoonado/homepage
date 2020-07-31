/** @jsx jsx */
import { jsx, Container, Image, Grid } from 'theme-ui';

const ImageLayout = props => (
    <Container p={[5, 5, 6]}>
        <Grid gap={[2, 4]} columns={[1, '3fr 2fr']}>
            <main>
            { props.children }
            </main>
            <aside><Image src='PortraitTransparent.png' variant='sidebar' /></aside>
        </Grid>
    </Container>
)

/*const ImageLayout = props => (
    <div
    sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        flex: '1 1 auto',
        alignItems: 'center',
        p: 20
    }}>
        <main
        sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
            p: 20
        }}>
            { props.children }
        </main>
        <aside
        sx={{flexGrow: 1, flexBasis: 512, p: 2}}>
        <Image src='PortraitTransparent.png' variant='sidebar' />
        </aside>
    </div>
)*/

export default ImageLayout;
