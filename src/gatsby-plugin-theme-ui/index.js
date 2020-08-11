export default {
    "breakpoints": ["40em", "60em", "68em"],
    "colors": {
        "text": "#3B393C",
        "background": "#FCFBF6",
        "primary": "#951F1F",
        "secondary": "#CA424F",
        "highlight": "#5AC3D9",
        "muted": "#F9F5F0",
        "sideImage":"#3B393C"
    },
    "fonts": {
        "body": "apolline, Crimson Pro, system-ui, sans-serif",
        "heading": "brandon-grotesque, system-ui, sans-serif",
        "monospace": "Menlo, monospace",
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
        "heading": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading"
        }
    },
    "styles": {
        "Container": {
            "p": 3,
            "maxWidth": 1024
        },
        "root": {
            "fontFamily": "body",
            "lineHeight": "body",
            "fontWeight": "body",
            "fontSize": 1
        },
        "h1": {
            "variant": "textStyles.heading",
            "fontSize": 6
        },
        "h2": {
            "variant": "textStyles.heading",
            "fontSize": 5
        },
        "h3": {
            "variant": "textStyles.heading",
            "fontSize": 4
        },
        "h4": {
            "variant": "textStyles.heading",
            "fontSize": 3,
            "fontStyle": "italic"
        },
        "h5": {
            "variant": "textStyles.heading",
            "fontSize": 2
        },
        "h6": {
            "variant": "textStyles.heading",
            "fontSize": 1
        },
        "a": {
            "color": "primary",
            "textDecoration": "none",
            ":hover": {
                "textDecoration": "underline"
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
            "color": "secondary",
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
            "borderRadius": 4,
            "border": '1px solid',
            "borderColor": 'primary',
            "bg": 'muted'
        },
    },
    "links": {
        "nav": {
            "fontSize": [1, 2, 2],
            "fontWeight":"body",
            "fontFamily": "heading",
            "fontVariantCaps": "all-small-caps",
            "color": 'text',
            "cursor": 'pointer',
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
