import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {RxRulerSquare} from "react-icons/rx"
import {AiOutlineUsergroupDelete,AiOutlineWifi,AiOutlineCheck} from "react-icons/ai"
import {MdWaves} from "react-icons/md"

import {FaBed,FaPaypal} from "react-icons/fa"
const RoomsDet = () => {
  return (
    <Box align='left' mt={3}>
        <Text fontSize={15} fontWeight='bold'  ml={2}>
        Room, 1 King Bed (View, eco)
        </Text>
        <Box>
            <Flex ml={2}>
                <Box mt={1}>
                <RxRulerSquare/>
                </Box>
                <Text ml={4}>484  sq ft</Text>
            </Flex>
            <Flex ml={2}>
                <Box mt={1}>
                <MdWaves/>
                </Box>
                <Text ml={4}>Partial sea view</Text>
            </Flex>
            <Flex ml={2}>
                <Box mt={1}>
                <AiOutlineUsergroupDelete/>
                </Box>
                <Text ml={4}>Sleeps 3</Text>
            </Flex>
            <Flex ml={2}>
                <Box mt={1}>
                <FaBed/>
                </Box>
                <Text ml={4}>2 Twin Beds</Text>
            </Flex>
            <Flex ml={2}>
                <Box mt={1}>
                <AiOutlineWifi/>
                </Box>
                <Text ml={4}>Free WiFi</Text>
            </Flex>
            <Flex ml={2}>
                <Box mt={1}>
                <FaPaypal/>
                </Box>
                <Text ml={4}>Free self parking</Text>
            </Flex>
            <Flex ml={2}>
                <Box mt={1}>
                <AiOutlineCheck/>
                </Box>
                <Text ml={4}>Reserve now, pay later</Text>
            </Flex>
            <br />
            <Text ml={2} color="teal">Fully refundable </Text>
            <Text ml={2} fontSize={12} color={'gray.700'}>Before Tue, 27 dec</Text>
            <Text  ml={2} fontSize={15} color='blue.400'>More Details {'>'}</Text>

            <Text  ml={2} fontSize={'2xl'} fontWeight='bold'>$360</Text>
            <Flex>
                <Text color='blue.400'>Price Details {">"} </Text>
                <Spacer />
                <Button mr={2} mt={-2} mb={2} bg={'blue'} color='white' colorScheme={'blue.300'}>Reserve</Button>
            </Flex>
        </Box>
    </Box>
  )
}

export default RoomsDet
