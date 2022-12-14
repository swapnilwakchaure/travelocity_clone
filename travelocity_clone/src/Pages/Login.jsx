import React from "react";
import { Box, Image, Spacer } from "@chakra-ui/react";
import logoWhite from '../assets/TRAVELGO-(2).png'
const Login = () => {
  return (
    <div>
      <Box border='2px' borderColor='black'>
        <Spacer />
        <Image border='2px' borderColor='black'
          objectFit="cover"
          src={logoWhite}
          alt="Dan Abramov"
        />
        <Spacer />
      </Box>
    </div>
  );
};

export default Login;
