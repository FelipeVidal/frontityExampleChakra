import React from 'react';
import { connect } from 'frontity';
import {
    Heading,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    HStack,
    Box
} from "@chakra-ui/react";
import Link from './Link';
const Header = () => {

    return (
        <Flex as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
        >
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                <HStack>
                    <Box>
                        <h2>Pets Information</h2>
                    </Box>
                    <Box pl='5'>
                        <Breadcrumb separator="-">
                            <BreadcrumbItem>
                                <Link href='/'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link href='/pets'>Pets</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                </HStack>
            </Heading>

        </Flex>
    );
}

export default connect(Header);