/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui'

export default function Footer(props) {
    return (
        <footer
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                p: 20,
                variant: 'styles.footer',
            }}>
            <NavLink href='#!'sx={{ variant: 'styles.navlink', p: 2 }}>
                GitHub
            </NavLink>
            <div sx={{ mx: 'auto' }} />
            <div sx={{ p: 2 }}>© 2020 Willie Payne</div>
        </footer>
    )
}
