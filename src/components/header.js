/** @jsx jsx */
import React, { useState } from 'react';
import { animateScroll as scroll } from "react-scroll";
import NavScrollLink from './scroll-link.js';

import { useStaticQuery, graphql } from "gatsby";
import { jsx, Grid, NavLink, useThemeUI } from "theme-ui";


export default function Header(props) {
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

    const { theme } = useThemeUI();

    return (
        <div sx={{zIndex:1,}} css={{position: 'sticky', top: 0,
        ".active":{
            color: theme.colors.primary,
            borderBottom: "1px solid currentColor"
        },
        "a":{"textDecoration": "none"},
        "a:hover":{"textDecoration": "none"}
        }}>
        <header
        sx={{
            variant: 'styles.header',
            p: 3,
            bg:'background',
        }}>
                <div sx={{display: 'flex',  justifyContent: 'center'}}>
                    {props.urlList.map((u, i) => (
                        <NavScrollLink key={u+1} to={u}
                            sx={{color: "inherit", variant: 'links.nav', p: 2}}
                            activeClass="active" to={u} spy={true} smooth={true}
                            offset={-84} duration={250}>{u}
                        </NavScrollLink>
                    ))}
                    <NavScrollLink to="#!"
                        sx={{color: "inherit",
                            variant: 'links.nav',
                            position:"absolute",
                            display: ["none", "block"],
                            fontFamily:"writing",
                            fontSize: [8, 8],
                            right:"12px",
                            p:2,
                            top:"-10%"}}
                            onClick={() => scroll.scrollToTop({duration:250})}>wp
                    </NavScrollLink>
                </div>
        </header>
        </div>

    )
}
