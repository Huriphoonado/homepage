/** @jsx jsx */
import React from "react";
import { jsx, Themed, Container, Link } from "theme-ui";

export default function NotFound() {
  return (
    <Container sx={{"textAlign": "center", py:"200px"}}>
      <Themed.h1>Now you've gone too far...</Themed.h1>
      <Link to="#!" href="/">Get back</Link>
    </Container>
  )
}
