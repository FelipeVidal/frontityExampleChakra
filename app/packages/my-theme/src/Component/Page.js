import React from "react"
import { connect } from "frontity"
import { Container } from "@chakra-ui/layout"
const Page = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    console.log('isPage');
    return (

        <>
            <Container centerContent>
                <h2>{page.title.rendered}</h2>
                <h2>{page.acf.breed}</h2>
            </Container>

        </>

    )
}

export default connect(Page)