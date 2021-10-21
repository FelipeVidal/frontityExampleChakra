import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Text, TextProps } from '@chakra-ui/layout'
import { connect } from 'frontity';

const Footer = () => (
    <Box as="footer" bg="teal.500" justify="space-between"role="contentinfo" mx="auto"  color="white" py="12" px={{ base: '4', md: '8' }}>
        <Stack>
            <Stack direction="row" spacing="4" align="center" justify="space-between">
                <Text fontSize="sm" >
                    &copy; {new Date().getFullYear()} Pets, Inc. All rights reserved.
                </Text>
            </Stack>
        </Stack>
    </Box>
)

export default connect(Footer);
