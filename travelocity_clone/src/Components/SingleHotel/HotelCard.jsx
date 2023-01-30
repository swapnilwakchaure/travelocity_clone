import { Box,Flex,Link,Spacer,Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {AiOutlineHeart} from "react-icons/ai"
import React from 'react'
import "./HotelCard.css"
import Tabss from './Tabss'
import { useLocation } from 'react-router-dom'
const HotelCard = () => {
  const location = useLocation();
const item = location.state;
console.log(item);
  return (
    <Box w={{base:'95%',md:'80%'}} m="auto" pt={5} bg='Gray.200' overflow={'hidden'}>
      <Flex  pb='5' w="98%" m="auto" h={45} alignItems='center'>
        <Link to='/products'>
        <Flex m="auto" h={45} alignItems='center'>
      <ArrowBackIcon/>
        <Text ml={2} color="blue.400">See All Properties</Text>
        </Flex>
        </Link>
        <Spacer/>
      </Flex>
      <Flex>
        <img id='Bimage' src={item.images[0].url} alt="" height="2rem" />
        <div className='G1'>
        <img id='gimages' src={item.images[1].url} alt="" />
        <img id='gimages' src={item.images[2].url} alt="" />   
        <img id='gimages' src={item.images[3].url} alt="" />
        <img id='gimages' src={item.images[4].url} alt="" />
      </div>
      </Flex>
      <Flex>
      <Tabss item={item}/>
      <Spacer />
      </Flex>
      <hr />
    </Box>
  )
}

export default HotelCard
