import styles from "./Navbar.module.css";
import Travelgo from "../../Assets/travelgo1.png";
import { FaShoppingBag } from "react-icons/fa";
import { Link as ChakraLink,Box, Button, Flex, Hide, HStack, Image, Input, Select, Spacer, useDisclosure } from "@chakra-ui/react";
import HomeAccount from "../../Components/HomeAccount/HomeAccount";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import{FiMenu} from 'react-icons/fi'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from "react";

const Navbar = () => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  const userAuth = useSelector((store) => store.auth);
  const { isAuth, username } = userAuth;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <HStack w="100%" bg="#0a428b" alignItems={'center'} px='3'>
        <Hide above='md'>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <FiMenu size='1.3rem' color='white' />
      </Button>
      </Hide>
        <Link to="/">
          <Image
            boxSize="100px"
            objectFit="contain"
            src={Travelgo}
            alt="travelgo-image"
          />
        </Link>
        <Box>
          <Select placeholder="More Travel" color='white'>
          <option value="">More Travel</option>
              <option value="">Packages</option>
              <option value="">Stays</option>
              <option value="">Cars</option>
              <option value="">Flights</option>
              <option value="">Cruises</option>
              <option value="">Things to do</option>
              <option value="">Trips for me</option>
              <option value="">Discover</option>
              <option value="">Travel Deals</option>
              <option value="">Get Inspired</option>
              <option value="">Groups & meetings</option>
          </Select>
        </Box>
        <Spacer />
        <Hide below='md'>
        <Flex flexDirection={'row'} color='white' gap='1rem' alignItems={'center'} className='last-item'>
          <ChakraLink>Espanol</ChakraLink>
          <ChakraLink href="/listYourProperty">
            <div>List your property</div>
          </ChakraLink>
          <ChakraLink>Support</ChakraLink>
          <ChakraLink>Trips</ChakraLink>
            <HomeAccount login={"Sign In"} />
        </Flex>
        </Hide>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w='100%'>
          <DrawerCloseButton />
          <DrawerHeader>
          <HomeAccount login={"Sign In"} />
          </DrawerHeader>
          <DrawerBody w='100%'>
          <Flex p='1rem' flexDirection={'column'} gap='1rem' alignItems={'center'}>
          <Flex w='100%' className={styles.sideLink}><Link w='100%'>Espanol</Link></Flex>
          <Flex w='100%' className={styles.sideLink}><Link w='100%' href="/listYourProperty">List your property</Link></Flex>
          <Flex w='100%' className={styles.sideLink}><Link w='100%'>Support</Link></Flex>
          <Flex w='100%' className={styles.sideLink}><Link w='100%'>Trips</Link></Flex>
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
