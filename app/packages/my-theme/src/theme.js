import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
const themes = ({
    styles: {
        global: {
            "html, body": {
                color: "gray.600",
                lineHeight: "tall",
            },
            a: {
                color: "teal.800",
            },
            
        },
    },
    textStyles: {
        tittlePage: {
            // you can also use responsive styles
            fontSize: "lg",
            fontWeight: "bold",
            margin: "5%",
            marginLeft: "0%",
            fontFamily: "Heading",


        },
        razaPet: {
            fontSize: "sm",
            fontStyle: "italic",
            fontWeight: "normal",
            fontFamily: "Body",
            margin: "2%",
            marginLeft: "0%",

        },

        namePet: {
            fontSize: "md",
            fontWeight: "bolt",
            fontFamily: "Body",
            margin: "2%",
            marginLeft: "0%"
        },

        restPet: {
            fontSize: "sm",
            fontWeight: "bolt",
            fontStyle: "italic",
            margin: "2%",
            fontFamily: "Body",
            marginLeft: "0%",
            whiteSpace: "pre-line"
        },


        h2: {
            fontSize: ["36px", "48px"],
            fontWeight: "semibold",
            lineHeight: "110%",
            letterSpacing: "-1%",
        },
    },
})

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "50em",
    lg: "62em",
    xl: "90em",
    "2xl": "96em",
})

const theme = extendTheme(themes, { breakpoints });





export default theme;