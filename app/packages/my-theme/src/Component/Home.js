
import { connect } from 'frontity';
import {Text,Center} from "@chakra-ui/react"
import React from 'react';
import { useMediaQuery } from "@chakra-ui/react"

import { Container } from "@chakra-ui/layout"

const Home = ({ state,children }) => {
    const [isSmallerThan992] = useMediaQuery("(min-width: 992px)")
    return(
        <>
            <Container>
                <Center>
                    <Text margin = {"10px"} textStyle="tittlePage" > {isSmallerThan992 ? "Conoce nuestra mascotas":"Mascotas"} </Text>    
                </Center>    
                {children}           
            </Container>
        </>
    );

}
export default connect(Home);