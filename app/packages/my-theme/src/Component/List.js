
import { connect } from "frontity"
import Link from "./Link"
import { ListItem, UnorderedList } from "@chakra-ui/react"
const List = ({ state }) => {
    const data = state.source.get(state.router.link)
    console.log(state);
    console.log('isArchive');
    return (
        <>
            <h1>Posts:</h1>
            <UnorderedList pl="5">
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    return (
                        <ListItem key={item.id}> 
                        <Link  href={item.link}>{post.title.rendered}</Link>
                        </ListItem>
                    )
                })}
            </UnorderedList>

        </>
    )
}

export default connect(List)