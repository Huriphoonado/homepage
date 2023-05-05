export default {
    "config": {
        "initialColorModeName": "light",
        "useColorSchemeMediaQuery": "system"
    },
    "breakpoints": ["40em", "62em", "64em"],
    "colors": {
        "text": "#3B393C",
        "background": "#FCFBF6",
        "primary": "#1E5C75", // Payne's Gray
        "highlightText": "#FFFFFF",
        "muted": "#e8edea",
        "modes": {
            "dark": {
                "text": "hsl(210, 50%, 96%)",
                "background": "#0E1F38",
                "primary": "#FFD100",
                "highlightText": "#0E1F38",
                "muted": "#112544"
            }
        }
    },
    "fonts": {
        "body": "brandon-grotesque, system-ui, sans-serif",
        "heading": "brandon-grotesque, system-ui, sans-serif",
        "monospace": "Menlo, monospace",
        "formal": "livory, Crimson Pro, system-ui, serif",
        "writing": "professor, Liu Jian Mao Cao, system-ui, sans-serif"
    },
    "fontSizes": [
        14, 16, 20, 24, 28, 32, 36, 42, 48, 64, 72, 84
    ],
    "fontWeights": {
        "body": 400,
        "heading": 700,
        "display": 900
    },
    "lineHeights": {
        "body": 1.5,
        "heading": 1.25
    },
    "textStyles": {
        "body": {
            "fontFamily": "body",
            "lineHeight": "body",
            "fontWeight": "body",
            "*::selection": {
                "background": theme => theme.colors.primary,
                "color": theme => theme.colors.highlightText
            }
        },
        "heading": {
            "fontFamily": "heading",
            "fontWeight": "heading",
        }
    },
    "styles": {
        "Container": {
            "p": 3,
            "maxWidth": 1024,
        },
        "root": {
            "variant": "textStyles.body",
            "fontSize": [1, 2],
        },
        "h1": {
            "variant": "textStyles.heading",
            "fontSize":[8, 9, 10],
            "fontWeight":"display",
            "mb":0
        },
        "h2": {
            "variant": "textStyles.heading",
            "fontSize": [5,6,7]
        },
        "h3": {
            "variant": "textStyles.heading",
            "fontSize": [3,4,4],
            "fontWeight": 400,
            "fontStyle": "italic"
        },
        "h4": {
            "variant": "textStyles.heading",
            "fontSize": [2,3,3],
            "fontStyle": "italic"
        },
        "h5": {
            "variant": "textStyles.heading",
            "fontWeight": "body",
            "mb":0,
            "fontSize": 2,
            "fontVariantCaps": "all-small-caps"
        },
        "h6": {
            "variant": "textStyles.heading",
            "fontFamily": "heading",
            "fontVariantCaps": "all-small-caps",
            "fontSize": 1,
            "fontWeight": 900,
            "mb":2,
            "mt":3
        },
        "h7": {
            "variant": "textStyles.heading",
            "fontFamily": "heading",
            "fontVariantCaps": "all-small-caps",
            "fontSize": 1,
            "fontWeight": 900,
            "mb":0,
            "mt":0
        },
        "a": {
            "color": "text",
            "textDecoration": "underline",
            ":hover": {
                "textDecoration": "underline",
                "color": "primary",
            }
        },
        "pre": {
            "variant": "prism",
            "fontFamily": "monospace",
            "fontSize": 1,
            "p": 3,
            "color": "text",
            "bg": "muted",
            "overflow": "auto",
            "code": {
                "color": "inherit"
            }
        },
        "code": {
            "fontFamily": "monospace",
            "color": "text",
            "fontSize": 1
        },
        "inlineCode": {
            "fontFamily": "monospace",
            "color": "secondary",
            "bg": "muted"
        },
        "table": {
            "width": "100%",
            "my": 4,
            "borderCollapse": "separate",
            "borderSpacing": 0,
            "th,td": {
                "textAlign": "left",
                "py": "4px",
                "pr": "4px",
                "pl": 0,
                "borderColor": "muted",
                "borderBottomStyle": "solid"
            }
        },
        "th": {
            "verticalAlign": "bottom",
            "borderBottomWidth": "2px"
        },
        "td": {
            "verticalAlign": "top",
            "borderBottomWidth": "1px"
        },
        "hr": {
            "border": 0,
            "borderBottom": "1px solid",
            "borderColor": "muted"
        },
        "img": {
            "maxWidth": "100%"
        },
    },
    "cards": {
        "primary": {
            "borderRadius": 6,
            "border": '1px solid',
            "borderColor": 'muted',
            "bg": 'muted'
        },
    },
    "buttons": {
        "primary": {
            "fontSize": 1,
            "fontWeight": 300,
            "bg": "muted",
            "color":"primary",
            "border": '2px solid',
            "borderColor": 'primary',
            "borderRadius": 12,
            "cursor": "pointer",
            "&:hover": {
                "borderColor": 'primary',
                "bg": "primary",
                "color": "background",
            },
            "&:focus": {
                "outline": "none",
                "borderColor": 'primary',
                "bg": "primary",
                "color": "background",
            }
        }
    },
    "links": {
        "nav": {
            "fontSize": [1, 2, 2],
            "fontWeight":"body",
            "fontFamily": "heading",
            "fontVariantCaps": "all-small-caps",
            "color": 'text',
            "cursor": 'pointer',
            "textDecoration": "none",
            "&:visited": {"color": "text"},
            "&:hover": {
                "color": "primary",
            },
            "&:active": {
                "color": "primary",
            },
        }
    }
}
