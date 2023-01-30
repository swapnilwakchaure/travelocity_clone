import {
  Box,
  Button,
  Flex,
  Grid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RxRulerSquare } from "react-icons/rx";
import {
  AiOutlineUsergroupDelete,
  AiOutlineWifi,
  AiOutlineCheck,
} from "react-icons/ai";
import { MdWaves } from "react-icons/md";

import { FaBed, FaPaypal } from "react-icons/fa";
import PaymentModal from "./PaymentModal";
const RoomsDet = ({ rooms }) => {
    const today = new Date();
const date = today.toLocaleDateString();
  console.log(rooms);
  return (
    <Box align="left" mt={3}>
      <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)'}} gap={5}>
        {rooms.map((room) => (
          <VStack p={{base:'4',md:'3'}} alignItems={"left"} style={{borderRadius:'15px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
            <img src={room.images[0].url} alt="Room image" style={{borderRadius:'15px'}} />
            <Text fontSize="xl" fontWeight="bold">
              {room.name}
            </Text>
            <VStack align="left">
              {room.amenities.map((item) => {
                if (item.formatted == "Wireless internet connection") {
                  return (
                    <Flex ml={2}>
                      <Box mt={1}>
                        <AiOutlineWifi />
                      </Box>
                      <Text ml={4}>Free WiFi</Text>
                    </Flex>
                  );
                }
              })}
            </VStack>
            <Text ml={2} color="teal">
          Fully refundable{" "}
        </Text>
        <Text ml={2} fontSize={12} color={"gray.700"}>{date}</Text>
        <Text ml={2} fontSize={15} color="blue.400">
          More Details {">"}
        </Text>

        <Text ml={2} fontSize={"2xl"} fontWeight="bold">₹{room.roomPrice}</Text>
          <Text color="blue.400">Price Details {">"} </Text>
          <Button colorScheme={'blue'}>Reserve</Button>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomsDet;
