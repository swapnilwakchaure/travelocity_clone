import { Box, Button, Flex, Grid, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Rooms.css";
import room1 from "./../../Assets/room1.webp";
import room2 from "./../../Assets/room2.webp";
import room3 from "./../../Assets/room3.webp";
import room4 from "./../../Assets/room4.webp";
import room5 from "./../../Assets/room5.webp";
import room6 from "./../../Assets/room6.webp";
import room7 from "./../../Assets/room7.webp";
import room8 from "./../../Assets/room8.webp";
import room9 from "./../../Assets/room9.webp";
import room10 from "./../../Assets/room10.webp";
import room11 from "./../../Assets/room11.webp";
import RoomsDet from "./RoomsDet";
const Rooms = ({item}) => {
  return (
    <Box>
      <Text fontSize={"4xl"} fontWeight="bold" align={"left"}>
        Choose your room
      </Text>
          <RoomsDet rooms={item.roomTypes} item={item} />
    </Box>
  );
};

export default Rooms;
