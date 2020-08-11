/** @jsx jsx */
import React, { useState } from 'react';
import { animateScroll as scroll } from "react-scroll";
import NavScrollLink from './scroll-link.js';

import {useScrollPosition} from './use-scroll-position.js';

import { useStaticQuery, graphql } from "gatsby";
import { jsx, NavLink } from "theme-ui";

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

    const [scrollerY, setScrollerY] = useState(0);
    useScrollPosition(({ prevPos, currPos }) => {
        setScrollerY(Math.min((currPos.y * -1) / 100, 0.8));
    }, [scrollerY]);

    return (
        <div sx={{zIndex:1}} css={{position: 'sticky', top: 0,
        ".active":{
            'color': theme => theme.colors.primary,
            borderBottom: "1px solid currentColor"
        },
        "a:hover":{"textDecoration": "none"}
        }}>
        <header
        sx={{
            display: 'flex',
            alignItems: 'center',
            variant: 'styles.header',
            p: 20,
            bg:'background'
        }}>
            <NavScrollLink to="#!"
                sx={{color: "inherit", variant: 'styles.navlink',
                fontSize: [2, 4, 4], fontFamily:"writing", "fontVariantCaps": "normal", p: 2}}
                onClick={() => scroll.scrollToTop({duration:250})}>{data.site.siteMetadata.title}
            </NavScrollLink>
            <div />
            {props.urlList.map((u, i) => (
                <div key={u+i}>
                <NavScrollLink to={u}
                    sx={{color: "inherit", variant: 'styles.navlink', p: 2}}
                    activeClass="active" to={u} spy={true} smooth={true}
                    offset={0} duration={250}>{u}
                </NavScrollLink>
                <div />
                </div>
            ))}
        </header>
        <div sx={{p: 0, m: 0, mx: 3, position: "sticky", top: 0, opacity: scrollerY/2,
            bg:"text", height:'1px', width: ["100%" - 3, "60%"],
            }}/>
        <div sx={{p: 0, m: 0, mx: 3, position: "sticky", top: 0, opacity: scrollerY/2,
            bg:"text", height:'1px', width: ["100%" - 3, "60%"], filter:"blur(1px)"
            }}/>
        </div>

    )
}
