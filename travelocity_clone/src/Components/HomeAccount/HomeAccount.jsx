import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/firebase";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  VStack,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  Link,
  InputGroup,
  Text,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import { userSignout } from "../../Redux/AuthReducer/action";
import { loginRequest } from './../../Redux/AuthReducer/action';
import Signout from "../Signout/Signout";


const HomeAccount = ({ login }) => {
  const toast = useToast()
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const userAuth = useSelector((store) => store.auth);
  const { isAuth, username } = userAuth;
  const auth = getAuth(app);
  const userFn = () => {
    signOut(auth)
      .then(() => {
        toast({
          title: 'Account signout successfully',
          status: 'success',
          duration: 2000,
        })
        onClose()
        dispatch(loginRequest());
        dispatch(userSignout());
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };
  if(!isAuth) {
    return (
      <>
        <Button color='white'
          onClick={onOpen}
          backgroundColor="#333"
          _hover={{ bg: "color: rgb(92, 92, 92)" }}
        >
          {login}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p="1em">
            <ModalHeader>
              Members can access discounts and special features
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack alignItems="center">
                <Button
                  onClick={onClose}
                  w="100%"
                  backgroundColor="#0f5bb9"
                  color="white"
                  _hover={{ bg: "#5b9be9" }}
                >
                  <Link as={ReachLink} to="/login">
                    Sign in
                  </Link>
                </Button>
                <ReachLink to="/signup" onClick={onClose}>
                  <Text color="#0f5bb9" as="b" fontSize="xl">
                    Create a free account
                  </Text>
                </ReachLink>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  else{
    return(

        <Signout />
    )
  }
};

export default HomeAccount;
