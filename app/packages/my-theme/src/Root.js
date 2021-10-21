import { connect } from 'frontity';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './Component/Header';
import Switch from "@frontity/components/switch";
import theme from './theme';
import List from './Component/List';
import Post from './Component/Post';
import Page from './Component/Page';
import Footer from './Component/Footer';

const Root = ({ state}) => {
    const data = state.source.get(state.router.link);

    return (
        <ChakraProvider theme={theme}  >
            
            <Header></Header>
            <Switch>
                <List when={data.isArchive} />
                <Post when={data.isPost} />
                <Page when={data.isPet} />
            </Switch>
        <Footer></Footer>
        </ChakraProvider>
    );
}



export default connect(Root);