import React from "react";
import { ScrollLink } from "react-scroll";
import { NavLink, Themed } from "theme-ui";

const NewLink = props => (
    <Themed.a as={NavLink} {...props}>
      {props.children}
    </Themed.a>
);


const NavScrollLink = ScrollLink(NewLink);
export default NavScrollLink;
