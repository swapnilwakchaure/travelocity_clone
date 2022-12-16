import React from "react";
import logoWhite from "../../Assets/travelgo2.png";
import { FaArrowLeft } from "react-icons/fa";
import {Link as ReachLink} from 'react-router-dom'
import {
  VStack,
  HStack,
  Text,
  Spacer,
  Link
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Signup_Welcome = () => {
    const username = useSelector((store)=>store.auth.username)
  return (
    <div>
      <div className="loginNavbar">
        <div className="arrow">
          <FaArrowLeft className="arrowIcon" />
        </div>
        <div className="logo">
          <img width="100px" src={logoWhite} alt="logo" />
        </div>
        <div></div>
      </div>
      <div className="loginContent">
        <VStack justify="center" pt="2em" width="30%" m="auto">
          <Text as="b" fontSize="4xl" mb="0.7em">
            Welcome {username}
          </Text>
          <Text color="#585858" textAlign="left" fontSize="xs">
          With your new Travelgo account, the world is within your reach.
          </Text>
          <HStack py="0.8em" width='100%'>
              <Link as={ReachLink} color="#0f5bb8" to='/'>
                Continue
              </Link>
              <Spacer />
          </HStack>
        </VStack>
      </div>
    </div>
  );
};
