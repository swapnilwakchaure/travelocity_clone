import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";

import {
    FormControl,
    FormHelperText,
    FormLabel
} from "@chakra-ui/form-control";

import { Link } from "react-router-dom";
import React from "react";

const HomeAccount = ({ login }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <>
            <Button onClick={onOpen} backgroundColor="#333">{login}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <LoginForm /> */}
                        <div>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" placeholder="enter email address" />
                                <FormLabel>Password</FormLabel>
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText>We'll never share your email.</FormHelperText>
                            </FormControl>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            LOGIN
                        </Button>
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                        <Link to="/signup">Sign In</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default HomeAccount;