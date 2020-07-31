/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui'

export default function Header(props) {
    return (
        <header
            sx={{
                display: 'flex',
                alignItems: 'center',
                variant: 'styles.header',
                p: 20
            }}
            css={{
                position: 'sticky',
                top: 0,
                'backdrop-filter': 'blur(4px)',
            }}>
            <NavLink href='#!' sx={{
                variant: 'styles.navlink',
                color: 'primary', p: 2, }}>
                Willie Payne
            </NavLink>
            <div />
            <NavLink href='#!' sx={{ variant: 'styles.navlink', p: 2, }}>
                About
            </NavLink>
            <div />
            <NavLink href='#!' sx={{ variant: 'styles.navlink', p: 2, }}>
                Publications
            </NavLink>
            <NavLink href='#!' sx={{ variant: 'styles.navlink', p: 2, }}>
                Media
            </NavLink>
        </header>
    )
}
