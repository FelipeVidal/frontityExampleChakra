import { connect, Global, css } from 'frontity';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './Component/Header';
import Switch from "@frontity/components/switch";
import theme from './theme';
import List from './Component/List';
import Post from './Component/Post';
import Page from './Component/Page';
import Footer from './Component/Footer';
import Home from './Component/Home';

import stylesSwiperBundle from 'swiper/swiper-bundle.min.css'
import stylesSwiper from 'swiper/swiper.min.css'
import styles from './styles.css'

import ImageSwiper from './Component/ImageSwiper';
const Root = ({ state}) => {
    const data = state.source.get(state.router.link);
   return (
        <ChakraProvider theme={theme}  >
            <Global styles = {css(stylesSwiperBundle)}/>
            <Global styles={css(stylesSwiper)} />
            <Global styles={css(styles)} />
            
            <Header></Header>
            <Switch>
                <Home when={data.isHome}>
                    <ImageSwiper></ImageSwiper>
                </Home>
                
                <List when={data.isArchive} />
                <Post when={data.isPost} />
                <Page when={data.isPet} />
            </Switch>
        <Footer></Footer>
        </ChakraProvider>
    );
}



export default connect(Root);