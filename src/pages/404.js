/** @jsx jsx */
import React from "react";
import { jsx, Styled, Container, Link } from "theme-ui";

export default function NotFound() {
  return (
    <Container sx={{"textAlign": "center", py:"200px"}}>
      <Styled.h1>Now you've gone too far...</Styled.h1>
      <Link to="#!" href="/">Get back</Link>
    </Container>
  )
}
