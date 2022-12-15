import React, { useEffect, useState } from "react";
import logoWhite from "../../assets/TRAVELGO-(2).png";
import { FaArrowLeft } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import {
  Checkbox,
  Button,
  InputRightElement,
  InputGroup,
  VStack,
  HStack,
  Text,
  Input,
  Spacer,
  Flex,
  Link,
  Progress,
  ListItem,
  ListIcon,
  UnorderedList,
  Box,
  Show,
  List,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { hasAlphaNum, hasSymbol } from "./../../utils/utilis";
import {
  loginRequest,
  loginSuccess,
  loginError,
} from "./../../Redux/AuthReducer/action";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./../../Firebase/firebase";
import { saveDataLocal } from "./../../LocalStorage/usernamePassword";

const Login = () => {
  const dispatch = useDispatch();
  const [count, setcount] = useState(0);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);
  const [alphaNum, setalphaNum] = useState(0);
  const [symbolNum, setsymbolNum] = useState(0);
  const [strengthCount, setstrengthCount] = useState(0);
  const [checked, setchecked] = useState(true);
  const handleClick = () => setShow(!show);
  const handleSubmit = () => {

  };
  const passwordChangeFn = (e) => {
    setpassword(e.target.value);
  };
  useEffect(() => {
    let passTemp = 0;
    if (password.length > 7) {
      passTemp = 1;
    }
    hasAlphaNum.test(password) == true ? setalphaNum(1) : setalphaNum(0);
    hasSymbol.test(password) == true ? setsymbolNum(1) : setsymbolNum(0);
    let tempCount = ((alphaNum * 30) + (symbolNum * 30) + (passTemp * 40));
    setstrengthCount(tempCount);
  }, [password.length,strengthCount]);
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
              width="100%"
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
            className={`continue ${
               email && password ? "darkBlue" : null
            }`}
            disabled={email == "" && password == "" ? true : false}
            onClick={handleSubmit}
          >
            Continue
          </button>
          <Box py="0.8em" color="#585858">
            <Text textAlign="left" fontSize="xs">
              Already have an account?{" "}
              <Link color="#0f5bb8" href="#">
                Create one
              </Link>{" "}
            </Text>
          </Box>
          {/* <Text color="#585858" fontSize="xs">
            or continue with
          </Text> */}
        </VStack>
      </div>
    </div>
  );
};

export default Login;
