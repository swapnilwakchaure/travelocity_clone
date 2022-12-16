import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Map from '../ProductComponents/Map'
import {MdLocationOn} from "react-icons/md"
import {AiFillCar} from "react-icons/ai"
const Location = () => {
  return (
    <Box>
      <Flex>
        <Box w="40%" align='left'>
            {/* left             */}
            <Text fontSize={'2xl'} fontWeight='bold'>
            About this area
            </Text>
            <br />
            <Text fontSize={'xl'} fontWeight='bold'>
                Mumbai
            </Text>
            <br />
            <Text color="gray">
            Located in Lower Parel neighborhood, The St. Regis Mumbai is connected to a shopping center. Shree Siddhivinayak Ganapati Temple and Haji Ali Dargah are notable landmarks, and travelers looking to shop may want to visit Palladium Mall and High Street Phoenix Mall. Looking to enjoy an event or a game while in town? See what's going on at MMRDA Grounds.
            </Text>
        </Box>
        <Box >
            {/* right */}
            <Map w="500" align='right' h='300' />
            <Text color={'blue.400'} ml={40}>View</Text>

            <Flex>
              <Text mt={100} ml={200} fontSize={30}><MdLocationOn/></Text> 
              <Text fontSize={'xl'} fontWeight={'bold'} mt={100} ml={10}>What's nearby</Text> 
              </Flex>
              <br />
              <Box align={'left'}  ml={270}>
              <Text>High Street Phoenix Mall - 1 min walk</Text>
              <Text>Palladium Mall - 7 min walk</Text>
              <Text>KEM Hospital - 3 min drive</Text>
              <Text>Tata Memorial Hospital - 11 min drive</Text>
              <Text>Haji Ali Dargah - 14 min drive</Text>
              </Box>

              <Flex>
              <Text mt={10} ml={200} fontSize={30}><AiFillCar/></Text> 
              <Text fontSize={'xl'} fontWeight={'bold'} mt={10} ml={10}>Getting Around</Text> 
              </Flex>
              <br />
              <Box align={'left'}  ml={270}>
              <Text>Grant Road Station - 5 min drive</Text>
              <Text>Mumbai Lower Parel Station - 9 min walk</Text>
              <Text>Chhatrapati Shivaji International Airport (BOM) - 38 min drive
              </Text>
             
              </Box>
           
        </Box>
      </Flex>


      
    </Box>
  )
}

export default Location
