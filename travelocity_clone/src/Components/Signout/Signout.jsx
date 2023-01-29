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
} from "@chakra-ui/react";
import { userSignout } from "../../Redux/AuthReducer/action";
import { loginRequest } from './../../Redux/AuthReducer/action';

function Signout() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userAuth = useSelector((store) => store.auth);
  const { isAuth, username } = userAuth;
  const auth = getAuth(app);
    const userFn = () => {
        signOut(auth)
          .then(() => {
            alert("Successfully signout");
            onClose()
            dispatch(loginRequest());
            dispatch(userSignout());
            navigate('/')
          })
          .catch((error) => {
            // An error happened.
          });
      };
  return (
    <>
        <Button color='white'
          onClick={onOpen}
          backgroundColor="#333"
          _hover={{ bg: "color: rgb(92, 92, 92)" }}
        >
          {username}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p="1em">
            <ModalHeader>{username}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack alignItems="center">
                <ReachLink onClick={userFn}>
                  <Text color="#0f5bb9" as="b" fontSize="xl">
                    Sign out
                  </Text>
                </ReachLink>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
  )
}

export default Signout