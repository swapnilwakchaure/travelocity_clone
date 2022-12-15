import React, { useEffect, useState } from "react";
import logoWhite from "../../assets/TRAVELGO-(2).png";
import { FaArrowLeft } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import "./Signup.css";
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
  const [first, setfirst] = useState("");
  const [show, setShow] = useState(false);
  const [alphaNum, setalphaNum] = useState(0);
  const [symbolNum, setsymbolNum] = useState(0);
  const [strengthCount, setstrengthCount] = useState(0);
  const [checked, setchecked] = useState(true);
  const handleClick = () => setShow(!show);
  const handleSubmit = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let token = user.accessToken;
        // ...
        const payload = {
          first,
          token,
        };
        dispatch(loginRequest());
        dispatch(loginSuccess(payload));
        saveDataLocal("userDetails", { email, password });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(loginError());
        // ..
      });
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

  console.log(alphaNum, "alphaNum");
  console.log(symbolNum, "symbolNum");
  console.log(strengthCount, "strengthCount");
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
            Create an account
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
            <Input
              value={first}
              onChange={(e) => setfirst(e.target.value)}
              placeholder="First name"
              size="lg"
              width="100%"
            />
            <Input placeholder="Last name" size="lg" width="100%" />
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
          <Flex
            hidden={password == "" ? true : false}
            flexDirection="column"
            width="100%"
          >
            <Flex flexDirection="column" width="100%" my="1em">
              <Flex width="100%" justify="space-between">
                <Text fontSize="xs">Password strength</Text>
                <Text fontSize="xs" as="b">
                  {strengthCount}
                </Text>
              </Flex>
              <Progress
                width="100%"
                value={strengthCount}
                size="sm"
                colorScheme={
                  strengthCount >= 60
                    ? "yellow"
                    : strengthCount == 100
                    ? "green"
                    : "white"
                }
              />
            </Flex>
            <List>
              <ListItem fontSize="xs" textAlign="left">
                <ListIcon
                  as={password.length >= 8 ? HiCheckCircle : GoPrimitiveDot}
                  color={password.length >= 8 ? "green" : "black"}
                />
                Includes 8-64 characters
              </ListItem>
              <ListItem fontSize="xs" textAlign="left">
                <ListIcon
                  as={alphaNum == 1 ? HiCheckCircle : GoPrimitiveDot}
                  color={alphaNum == 1 ? "green" : "black"}
                />
                Combines letters and numbers
              </ListItem>
              <ListItem fontSize="xs" textAlign="left">
                <ListIcon
                  as={symbolNum == 1 ? HiCheckCircle : GoPrimitiveDot}
                  color={symbolNum == 1 ? "green" : "black"}
                />
                A special character ~ # @ $ % & ! * _ ? ^ -
              </ListItem>
            </List>
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
              first && email && password ? "darkBlue" : null
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
                Sign in
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
