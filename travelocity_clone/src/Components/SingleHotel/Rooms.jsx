import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import "./Rooms.css"
import room1 from "./../../Assets/room1.webp"
import room2 from "./../../Assets/room2.webp"
import room3 from "./../../Assets/room3.webp"
import room4 from "./../../Assets/room4.webp"
import room5 from "./../../Assets/room5.webp"
import room6 from "./../../Assets/room6.webp"
import room7 from "./../../Assets/room7.webp"
import room8 from "./../../Assets/room8.webp"
import room9 from "./../../Assets/room9.webp"
import room10 from "./../../Assets/room10.webp"
import room11 from "./../../Assets/room11.webp"
import RoomsDet from './RoomsDet'
const Rooms = () => {
   
  return (
    <Box>
      <Text fontSize={'4xl'} fontWeight="bold" align={'left'}>
      Choose your room
      </Text>
      <Flex gap={2}>
      <Input borderColor={'black'} focusBorderColor='blue.500' w={200} borderRadius={8}
 placeholder="gvjv"
 size="md"
 type="datetime-local"
/>

<Input borderColor={'black'} focusBorderColor='blue.500' w={200} borderRadius={8}
 placeholder="gvjv"
 size="md"
 type="datetime-local"
/>

<Input borderColor={'black'} focusBorderColor='blue.500' w={300} borderRadius={8}
 placeholder="Travelers"
 _placeholder={{color:"Gray" ,fontSize:"20px"}}
 size="md"
 
/>
<Button  color="white" w={'30%'}
        colorScheme=""
        bg="blue.500" >
    Check Availability
</Button>
      </Flex>
      <div id='Rcards'>
            <div>
                <img src={room1} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room2} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room3} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room4} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room5} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room6} alt="" />
                <RoomsDet/>
            </div>
            
            <div>
                <img src={room7} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room8} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room9} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room10} alt="" />
                <RoomsDet/>
            </div>
            <div>
                <img src={room11} alt="" />
                <RoomsDet/>
            </div>
      </div>
    </Box>
  )
}

export default Rooms
