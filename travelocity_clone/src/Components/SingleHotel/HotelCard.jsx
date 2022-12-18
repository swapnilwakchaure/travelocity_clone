import { Box,Flex,Spacer,Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {AiOutlineHeart} from "react-icons/ai"
import React from 'react'
import "./HotelCard.css"
import Tabss from './Tabss'
import Footer from '../FooterPage/FooterPage'

const HotelCard = () => {
  return (
    <Box  h="auto" w="80%" m="auto" pt={5} bg='Gray.200'>
      <Flex w="98%" m="auto" h={45} >
      <ArrowBackIcon/>
        <Text ml={2} color="blue.400">See All Properties</Text>
        <Spacer/>
        <AiOutlineHeart />
        <Text ml={2} color="blue.400">Save</Text>
      </Flex>
      <Flex>
        <img id='Bimage' src="https://images.trvl-media.com/lodging/6000000/5310000/5301700/5301691/796fe3c1.jpg?impolicy=resizecrop&rw=598&ra=fit" alt="" height="2rem" />
        <div className='G1'>
        <img id='gimages' src="https://images.trvl-media.com/lodging/6000000/5310000/5301700/5301691/f27b2428.jpg?impolicy=resizecrop&rw=297&ra=fit" alt="" />
        <img id='gimages' src="https://images.trvl-media.com/lodging/6000000/5310000/5301700/5301691/f27b2428.jpg?impolicy=resizecrop&rw=297&ra=fit" alt="" />   
        <img id='gimages' src="https://images.trvl-media.com/lodging/6000000/5310000/5301700/5301691/f27b2428.jpg?impolicy=resizecrop&rw=297&ra=fit" alt="" />
        <img id='gimages' src="https://images.trvl-media.com/lodging/6000000/5310000/5301700/5301691/f27b2428.jpg?impolicy=resizecrop&rw=297&ra=fit" alt="" />
      </div>
      </Flex>
      <Flex>
      <Tabss/>
      <Spacer />
      {/* <Button color="white" colorScheme="blue" bg="blue" mr={5}>
        Reserve a room
      </Button> */}
      </Flex>
      <Footer/>
    </Box>
  )
}

export default HotelCard
