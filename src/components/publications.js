/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Themed, Text, Link } from 'theme-ui';

const Publications = props => {
    const data = useStaticQuery(
        graphql`
        query MyQuery2 {
          allPublicationsJson {
            edges {
              node {
                  id
                  authors
                  note
                  title
                  type
                  venue
                  year
                  url
              }
            }
          }
        }
        `
    );

    // HTML for all publications
    let pub2HTML = function(node) {
        let top, title, authors;

        let sl = <span sx={{color:"primary"}}>/</span> // red slash

        top = node.note.length ?
            <><Text sx={t => t.styles.h5}>{node.year} {sl} {node.venue} {sl} {node.note}</Text><br/></> :
            <><Text sx={t => t.styles.h5}>{node.year} {sl} {node.venue}</Text><br/></>


        title = <><Text sx={{fontWeight: "700", fontSize: [2, 3]}}>{node.title}</Text><br/></>

        // Author list without highlighting my name
        //authors = <Text sx={{fontStyle: "italic"}}>{node.authors.join(", ")}</Text>


        // At some point this name probably should not be hard coded
        let authorsL = node.authors.map(a => (a == "William Payne") ?
            <Text sx={{fontStyle: "italic", color: "primary"}}>{a}</Text> :
            <Text sx={{fontStyle: "italic"}}>{a}</Text>
        );

        let interleave = (arr, thing) => [].concat(...arr.map(n => [n, thing])).slice(0, -1)
        authors = interleave(authorsL, <Text>{", "}</Text>)

        return (
            <div sx={{py:2, pl: 4}} key={node.id}>
            <Link sx={{textDecoration: "none"}} target="_blank" href={node.url}>
                {top}
                {title}
                {authors}
            </Link>
            </div>
        )
    }

    // Organize publications by categories
    let pubs = [
        {type: "Conference Proceedings", html:undefined},
        {type: "Journal Articles", html:undefined},
        {type: "Posters and Demos", html:undefined},
        {type: "Doctoral Consortia", html:undefined},
        {type: "Theses", html:undefined},
    ];

    pubs.forEach(p => {
        p.html = data.allPublicationsJson.edges
            .filter(({ node }) => (node.type == p.type))
            .map(({ node }) => pub2HTML(node))
    });

    let allPubs = pubs.filter(p => p.html.length);

    allPubs.map((p, i) => {
        p.allHTML =
        <div>
            <Themed.h3 sx={{mb:0}}>{p.type}</Themed.h3>
            {p.html}
        </div>
    })


    return (
        <>
        <Themed.h2>Publications</Themed.h2>
        <p>Mentorship is important to me. Undergraduate students who enrolled in Vertically Integrated Projects are marked with † while Masters students I mentored for thesis credit are marked with ‡.</p>
        {allPubs.map(p => p.allHTML)}
        </>
    );
}

export default Publications;
