import { Box, Flex, Grid, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiSwim } from "react-icons/bi";
import { FaCanadianMapleLeaf, FaSnowflake } from "react-icons/fa";
import { SlPaypal } from "react-icons/sl";
import { MdLocalLaundryService } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineRight,
  AiOutlineWifi,
  AiOutlineLeft,
} from "react-icons/ai";
import Map from "../ProductComponents/Map";
import GoogleMap from "../GoogleMapForSingleProduct/GoogleMap";
const Overview = ({ item }) => {
  var starArray = [];
  for (let i = 0; i < item.starRating; i++) {
    starArray.push(<AiFillStar size='1rem' />);
  }
  return (
      <Grid templateColumns={{base:'repeat(1,1fr)',md:'60% 40%'}} gap={5}>
        <VStack alignItems={'left'}>
          <Text fontSize="4xl" fontWeight={"bold"} align="left">
          {item.name}
        <Flex>{starArray}</Flex>
        </Text>
        <Text fontSize={"2xl"} fontWeight="bold" align={"left"}>
          {item.starRating}/10 Wonderful
        </Text>
        <Flex>
          <Text color={"blue.500"} align={"left"}>
            See All Views{" "}
          </Text>
          <Box color={"blue.500"} mt={1.5} ml={2}>
            <AiOutlineRight />
          </Box>
        </Flex>
        <Text fontSize={"xl"} fontWeight="bold" align={"left"}>
          Popular amenities
        </Text>
        <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}} color={"gray.700"} py={5} gap={8}>
          {
            item.amenities.map((amen, index) => {
              if(amen.formatted == 'Air conditioning'){
                return(<Flex>
                  <FaSnowflake />
                  <Text ml={2}>Air conditioning</Text>
                </Flex>)
              }
              if(amen.formatted == 'Water sports'){
                return(<Flex>
                  <BiSwim />
            <Text ml={2}>Pool</Text>
                </Flex>)
              }
              if(amen.formatted == 'Spa'){
                return(<Flex>
                  <FaCanadianMapleLeaf />
            <Text ml={2}>Spa</Text>
                </Flex>)
              }
              if(amen.formatted == 'Onsite laundry'){
                return(<Flex>
                  <MdLocalLaundryService />
            <Text ml={2}>Laundry</Text>
                </Flex>)
              }
              })
          }
        </Grid>
        <Flex color="blue.500" alignItems={'center'}>
          <Box mr={2}>
            <AiOutlineLeft />
          </Box>

          <Text>See All</Text>
        </Flex>
        </VStack>
        <VStack>

        <Box w={"auto"} borderRadius={10} m={4}>
          {/* map component */}
          <GoogleMap latitude={item.location.latitude} longitude={item.location.longitude} />
        </Box>
          <Text>{item.address.line1},{item.address.line2},{item.address.city},{item.address.countryName},{item.address.postalCode}</Text>
          <Flex ml={5}>
            <Text color={"blue.500"}>View in map </Text>
            <Box color={"blue.500"} mt={1.5} ml={2}>
              <AiOutlineRight />
            </Box>
          </Flex>
        </VStack>
      </Grid>
      
  );
};

export default Overview;
