import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Map from '../ProductComponents/Map'
import {MdLocationOn} from "react-icons/md"
import {AiFillCar} from "react-icons/ai"
import GoogleMap from '../GoogleMapForSingleProduct/GoogleMap'
const Location = ({item}) => {
  return (
      <VStack textAlign='justify'>
      <Text fontSize={'2xl'} fontWeight='bold'>
            About this area
            </Text>
            <Text fontSize={'xl'} fontWeight='bold' textAlign=''>{item.address.city}</Text>
            <Text color="gray">{item.description.short}</Text>
          <GoogleMap latitude={item.location.latitude} longitude={item.location.longitude} />
      </VStack>
  )
}

export default Location
