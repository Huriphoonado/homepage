import React from "react";
import { ScrollLink } from "react-scroll";
import { NavLink, Styled } from "theme-ui";

const NewLink = props => (
    <Styled.a as={NavLink} {...props}>
      {props.children}
    </Styled.a>
);


const NavScrollLink = ScrollLink(NewLink);
export default NavScrollLink;
