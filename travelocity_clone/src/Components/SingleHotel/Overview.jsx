import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {BiSwim} from "react-icons/bi"
import {FaCanadianMapleLeaf,FaSnowflake} from "react-icons/fa"
import {SlPaypal} from "react-icons/sl"
import {MdLocalLaundryService} from "react-icons/md"
import {AiFillStar,AiOutlineRight,AiOutlineWifi,AiOutlineLeft} from "react-icons/ai"
const Overview = () => {
  return (
    <Flex>
      <Box>
          {/* Left side */}
          <Text fontSize="4xl" fontWeight={'bold'} align='left'>
            St.Regis Mumbai
            </Text>
           
            <Flex >
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            </Flex>
            <br />
          <Text fontSize={'2xl'} fontWeight="bold" align={'left'}>
          9.2/10 Wonderful
          </Text>
          <Flex>
          <Text color={'blue.500'} align={'left'}>
            See All Views </Text>
            <Box color={'blue.500'} mt={1.5} ml={2}>
            <AiOutlineRight/>
            </Box>
          </Flex>
          <br />
          <Text fontSize={'xl'} fontWeight="bold" align={'left'}>
          Popular amenities
          </Text>
          <Flex  w={500} h='auto' color={'gray.700'} pt={5}>
                <Flex w={'50%'} h={8} align='left'>
                <AiOutlineWifi/>
                <Text ml={2}>Wifi</Text>
                </Flex>
                <Spacer />
                <Flex w={'50%'} h={8}  align='left'>

                <BiSwim/>
                <Text ml={2}>Pool</Text>
                </Flex>
          </Flex>
          <Flex  w={500} h='auto' color={'gray.700'} pt={5}>
                <Flex w={'50%'} h={8} align='left'>
                <FaCanadianMapleLeaf/>
                <Text ml={2}>Spa</Text>
                </Flex>
                <Spacer />
                <Flex w={'50%'} h={8} align='left'>

                <MdLocalLaundryService/>
                <Text ml={2}>Laundry</Text>
                </Flex>
          </Flex>
          <Flex  w={500} h='auto' color={'gray.700'} pt={5}>
                <Flex w={'50%'} h={8} align='left'>
                <FaSnowflake/>
                <Text ml={2}>Air conditioning
                </Text>
                </Flex>
                <Spacer />
                <Flex w={'50%'} h={8}  align='left'>

                <SlPaypal/>
                <Text ml={2}>Parking included

                </Text>
                </Flex>
          </Flex>
          <Flex color="blue.500">
            <Box mt={1.5} mr={2}>
            <AiOutlineLeft/>
            </Box>
            
            <Text>See All</Text>
          </Flex>
      </Box>
      <Box border={'1px solid black'} w='80%' align='right'>
        {/* Right Side */}
        <Box border={'1px solid blue'} h={200} w={'60%'} borderRadius={10} m={4}>
             {/* map component */}
             Map
        </Box>
        <Box w={350}>
        <Text>
       462 Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra, 400013
       </Text>
       <Flex ml={5}>
       <Text color={'blue.500'} >
             View in map </Text>
            <Box color={'blue.500'} mt={1.5} ml={2}>
            <AiOutlineRight/>
            
            </Box>
            </Flex>
        </Box>

      </Box>
    </Flex>
  )
}

export default Overview
