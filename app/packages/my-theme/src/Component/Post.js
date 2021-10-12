import React from "react"
import { connect } from "frontity"
import { Container } from "@chakra-ui/layout"

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    console.log('isPost')
    return (
        <>
            <Container centerContent >
                <h2>{post.title.rendered}</h2>
                <p>
                    <strong>Posted: </strong>
                    {post.date}
                </p>
                <p>
                    <strong>Author: </strong>
                    {author.name}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </Container>
        </>
    )
}

export default connect(Post)