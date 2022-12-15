import React, { useEffect, useState } from "react";
import logoWhite from "../../Assets/travelgo2.png";
import { FaArrowLeft } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import {
  Checkbox,
  Button,
  InputRightElement,
  InputGroup,
  VStack,
  Text,
  Input,
  Flex,
  Link,
  Box,
} from "@chakra-ui/react";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./../../Firebase/firebase";
import { saveDataLocal } from "./../../LocalStorage/usernamePassword";

const Login = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);
  const [checked, setchecked] = useState(true);
  const handleClick = () => setShow(!show);
  const handleSubmit = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(checked){

          saveDataLocal("userDetails", { email, password });
        }
        navigate('/')
        
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const passwordChangeFn = (e) => {
    setpassword(e.target.value);
  };
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
            Sign In
          </Text>
          <Flex
            gap="1em"
            flexDirection="column"
            width="100%"
            alignItems="center"
          >
            <Input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email address"
              size="lg"
              width="100%" type='email'
            />
            <InputGroup size="lg" width="100%">
              <Input
                value={password}
                onChange={(e) => passwordChangeFn(e)}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button bg="white" h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <BiShowAlt /> : <BiHide />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex alignItems="left" width="100%">
            <Checkbox
              isChecked={checked}
              onChange={() => setchecked(!checked)}
              mt="0.8em"
              color="#585858"
            >
              Keep me signed in
            </Checkbox>
          </Flex>
          <Text color="#585858" textAlign="left" fontSize="xs">
            Selecting this checkbox will keep you signed into your account on
            this device until you sign out. Do not select this on shared
            devices.
          </Text>
          <Box py="0.8em" color="#585858">
            <Text textAlign="left" fontSize="xs">
              By creating an account, I agree to the Travelocity{" "}
              <Link color="#0f5bb8" href="#">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link color="#0f5bb8" href="#">
                Privacy Statement
              </Link>
              .
            </Text>
          </Box>
          <button
            className={`continue ${email && password ? "darkBlue" : null}`}
            disabled={email == "" && password == "" ? true : false}
            onClick={handleSubmit}
          >
            Continue
          </button>
          <Box py="0.8em" color="#585858">
            <Text textAlign="left" fontSize="xs">
              Already have an account?{" "}
              <Link color="#0f5bb8" as={ReachLink} to="/signup">
                Create one
              </Link>
            </Text>
          </Box>
        </VStack>
      </div>
    </div>
  );
};

export default Login;
