import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,VStack,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Input,Link,
    InputGroup,Text,
    InputRightElement
} from "@chakra-ui/react";

import {
    FormControl,
    FormHelperText,
    FormLabel
} from "@chakra-ui/form-control";

import { Link as ReachLink } from "react-router-dom";
import React from "react";

const HomeAccount = ({ login }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <>
            <Button onClick={onOpen} backgroundColor="#333" _hover={{ bg: 'color: rgb(92, 92, 92)' }}>{login}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p='1em'>
                    <ModalHeader>Members can access discounts and special features</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack alignItems='center'>
                        <Button onClick={onClose} w='100%' backgroundColor='#0f5bb9' color='white' _hover={{ bg: '#5b9be9' }}><Link as={ReachLink} to='/login'>Sign in</Link></Button>
                        <ReachLink to="/signup" onClick={onClose}><Text color='#0f5bb9' as='b' fontSize='xl'>Create a free account</Text></ReachLink>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default HomeAccount;