import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BsFillBookmarkCheckFill} from "react-icons/bs"

const ModalBody1 = () => {
  return (
    <Box>
        <Flex >
            <Text fontSize={'2xl'}>
      <BsFillBookmarkCheckFill/>
      </Text>
      <Box>
      <Text fontWeight={'bold'} ml={5}>Fully refundable before Tue, Dec 27</Text>
      <Text color={'gray.700'} ml={5}>You can change or cancel this stay if plans change. Because flexibility matters.</Text>
      </Box>
      </Flex>
      <Box border={'1px solid gray'} h="15rem" w='90%' m={'auto'} borderRadius={8}>
            <Text ml={5} mt={5} fontWeight={'bold'}>Pay Now</Text>
            <Box ml={10}>
            <ul >
                <li>We will process your payment in your local currency</li>
                <li>More ways to pay: use Debit/Credit card</li>
                <li>You can use a valid Travelocity coupon</li>
            </ul>
            </Box>
            <Text fontWeight={'bold'} ml={5} mt={5} fontSize={'xl'} >$362</Text>
            <Text ml={5} fontSize={'md'} color='gray.700'>Inclusive of all taxes</Text>
      </Box>
    </Box>
  )
}

export default ModalBody1
