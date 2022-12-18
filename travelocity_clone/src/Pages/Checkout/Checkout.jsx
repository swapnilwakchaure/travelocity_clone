import React, { useState } from "react";
import "./Checkout.css";
import { MdOutlineDone, MdKeyboardArrowDown, MdEmail } from "react-icons/md";
import { IoIosArrowForward, IoLockClosed } from "react-icons/io";
import { HiLockClosed } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  Checkbox,
  Button,
  FormControl,
  Badge,
  FormLabel,
  Grid,
  GridItem,
  Alert,
  Select,
  InputRightElement,
  OrderedList,
  AlertTitle,
  AlertDescription,
  Textarea,
  InputGroup,
  Image,
  InputLeftAddon,
  AccordionButton,
  Radio,
  AccordionItem,
  AccordionPanel,
  ListItem,
  Heading,
  Accordion,
  VStack,
  Spacer,
  Text,
  HStack,
  Input,
  RadioGroup,
  TabPanel,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Flex,
  UnorderedList,
  Link,
  Stack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate()
  const cardNameHardcoded = "DHANUSH";
  const cardNumHardcoded = "1111222233334444";
  const cvvHardcoded = "312";
  const [cardName, setcardName] = useState("");
  const [cardNum, setcardNum] = useState("");
  const [cvv, setcvv] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [plusValue, plusSetValue] = useState("yesPlus");
  const completeBooking = () =>{
    if(cardNameHardcoded == cardName){
      if(cardNumHardcoded == cardNum){
        if(cvvHardcoded == cvv){
          navigate('/')
        }
        else{
          alert("Invalid credentials")
        }
      }
      else{
        alert("Invalid credentials")
      }
    }
    else{
      alert("Invalid credentials")
    }
  }
  return (
    <VStack backgroundColor="#ededed" px="10%">
      <VStack alignItems="left" w="100%" mt="1em">
        <Text fontSize="2xl" as="b" textAlign={"left"} color="#014075">
          Secure booking — only takes 2 minutes!
        </Text>
        <Flex alignItems="center" color="green" gap="1em" fontSize="md">
          <MdOutlineDone fontSize="1.2em" />
          <Text>You've picked a winner! This hotel is rated 9.2/10.</Text>
        </Flex>
      </VStack>
      <div className="gridDiv">
        <VStack className="first" w="100%">
          <VStack textAlign="left" alignItems={"left"}>
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
            >
              <Text fontSize="xl" as="b">
                Who's checking in?
              </Text>
              <Text>
                <Text as="b">Room 1:</Text> 2 Adults 2 Twin Beds Non-smoking
              </Text>
              <Flex alignItems="center" color="green" gap="1em">
                <HStack>
                  <MdOutlineDone fontSize="1em" />
                  <Text fontSize="sm">Breakfast included</Text>
                </HStack>
                <HStack>
                  <MdOutlineDone fontSize="1em" />
                  <Text fontSize="sm">Free parking</Text>
                </HStack>
                <HStack>
                  <MdOutlineDone fontSize="1em" />
                  <Text fontSize="sm">Free WiFi</Text>
                </HStack>
              </Flex>
              <Spacer />
              <FormControl isRequired>
                <HStack mb={3}>
                  <Box>
                    <FormLabel>First name</FormLabel>
                    <Input type="text" placeholder="( Eg: John )" />
                  </Box>
                  <Box>
                    <FormLabel>Last name</FormLabel>
                    <Input type="text" placeholder="( Eg: Smith )" />
                  </Box>
                </HStack>
                <Box mb={3}>
                  <FormLabel>Mobile phone number</FormLabel>
                  <InputGroup gap="0.5em">
                    <Select maxW="20%">
                      <option value="option1">USA +1</option>
                      <option value="option2">India +91</option>
                      <option value="option3">Australia +61</option>
                    </Select>
                    <Input
                      maxWidth="md"
                      type="tel"
                      placeholder="so the property can reach you"
                    />
                  </InputGroup>
                </Box>
                <Checkbox defaultChecked size="sm">
                  Receive text alerts about this trip. Message and data rates
                  may apply.
                </Checkbox>
                <Accordion allowToggle className="accordionButton">
                  <AccordionItem>
                    <h2>
                      <AccordionButton _hover={{ bg: "white" }}>
                        <Flex
                          alignItems={"center"}
                          gap="0.2em"
                          color="blue"
                          fontSize="0.8em"
                        >
                          <Link>Special Requests (optional)</Link>
                          <MdKeyboardArrowDown />
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="0.8em">
                      Special/accessibility requests (e.g. roll-away beds, late
                      check-in, and accessible rooms) are not guaranteed. If you
                      don't hear back from the property, you may want to contact
                      them directly to confirm. The property may charge a fee
                      for certain special requests.
                      <Textarea placeholder="Limit 250 characters" mt={2} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </FormControl>
            </VStack>
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
            >
              <Text fontSize="xl" as="b">
                Protect your hotel{" "}
                <Badge color="white" backgroundColor="green">
                  Recommended
                </Badge>
              </Text>
              <Box border="1px" borderColor="gray.300" p={3}>
                <Text fontSize="sm">
                  <Badge color="#616163" backgroundColor="#d3d4d4" mr={2}>
                    Important
                  </Badge>
                  Trip cancellation due to government travel advisories, fear of
                  travel, or change of mind is not covered. Travel insurance may
                  provide coverage for COVID-19 diagnosed illness. COVID-19 is a
                  foreseen event and certain other coverages will not apply.
                </Text>
              </Box>
              <VStack alignItems={"left"} py="1em">
                <Heading as="h3" size="sm" noOfLines={1}>
                  Note: Resident of New York or Washington?
                </Heading>
                <Text fontSize="sm">
                  Select your state if you are a resident of New York or
                  Washington, to view plans eligible for your state.
                </Text>
              </VStack>
              <VStack alignItems={"left"}>
                <Heading as="h3" size="sm" noOfLines={1}>
                  4 reasons you might need travel protection
                </Heading>
                <OrderedList pl={4} fontSize="sm" color="grey">
                  <ListItem>
                    You get delayed for covered reasons and miss a night of your
                    hotel stay
                  </ListItem>
                  <ListItem>
                    You're sick and don't use all your hotel nights
                  </ListItem>
                  <ListItem>
                    You need to extend your trip due to the illness of a travel
                    companion
                  </ListItem>
                  <ListItem>
                    You need up to $10,000 for covered medical expenses while on
                    your trip
                  </ListItem>
                </OrderedList>
                <Heading as="h4" size="xs" noOfLines={1} isRequired>
                  Select Yes or No to continue booking *
                </Heading>
              </VStack>
              <RadioGroup name="plus" onChange={plusSetValue} value={plusValue}>
                <Flex
                  justifyContent={"space-between"}
                  backgroundColor="#edfae6"
                  minH="4em"
                  px="1em"
                  mb="0.5em"
                >
                  <Radio size="md" value="yesPlus">
                    Yes, I want Hotel Booking Protection Plus for my trip.
                  </Radio>
                  <Box textAlign={"right"}>
                    <Text as="b" fontSize="xl">
                      $8.00
                    </Text>
                    <Text>per person</Text>
                  </Box>
                </Flex>
                <Flex backgroundColor="#f5f5f5" minH="4em" px="1em">
                  <Radio size="md" value="noPlus">
                    No, I'm willing to risk my $172.36 trip.
                  </Radio>
                </Flex>
              </RadioGroup>
              <Text py="1em" as="i" fontSize="sm">
                “ Things happened outside of my control which caused the trip to
                be canceled. The Travel Protection was valuable in reducing the
                losses to me when we had to cancel the trip. ” - Mr. Rodman
              </Text>
            </VStack>
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
            >
              <Text fontSize="xl" as="b">
                Payment method
              </Text>
              <Flex alignItems="center" color="green" gap="1em" pt="1em">
                <HStack>
                  <MdOutlineDone fontSize="1em" />
                  <Text fontSize="sm">We use secure transmission</Text>
                </HStack>
                <HStack>
                  <MdOutlineDone fontSize="1em" />
                  <Text fontSize="sm">
                    We protect your personal information
                  </Text>
                </HStack>
              </Flex>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Debit/Credit Card</Tab>
                  <Tab>PayPal</Tab>
                  <Tab>Click-to-Pay</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <FormControl isRequired>
                      <HStack mb={3}>
                        <Box>
                          <FormLabel>Name on Card</FormLabel>
                          <Input type="text" Width="100%" value={cardName} onChange={(e)=>setcardName(e.target.value)} />
                        </Box>
                      </HStack>
                      <HStack mb={3}>
                        <Box>
                          <FormLabel>Debit/Credit card number</FormLabel>
                          <Input type="tel" maxLength="16" value={cardNum} onChange={(e)=>setcardNum(e.target.value)} />
                        </Box>
                      </HStack>
                      <Box mb={3}>
                        <FormLabel>Expiration date</FormLabel>
                        <InputGroup gap="0.5em">
                          <Select maxW="18%">
                            <option value="">month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                          </Select>
                          <Select maxW="15%">
                            <option value="">year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                          </Select>
                        </InputGroup>
                      </Box>
                      <HStack mb={3}>
                        <Box>
                          <FormLabel>Security code</FormLabel>
                          <Input type="tel" maxLength="3" value={cvv} onChange={(e)=>setcvv(e.target.value)} />
                        </Box>
                        <Box>
                          <FormLabel>Billing ZIP code</FormLabel>
                          <Input type="tel" maxLength="6" />
                        </Box>
                      </HStack>
                    </FormControl>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" color="#616163">
                      <Text color="#616163" mr={2} as="b">
                        Important:
                      </Text>
                      You will be redirected to PayPal's website to securely
                      complete your payment.
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      my="0.5em"
                      src="https://src.mastercard.com/assets/img/acc/global/src_mark_hor_blk_S_16px.svg?locale=en_us&paymentmethod=discover%2Camex%2Cvisa%2Cmaster&checkoutid=383cbc5f20fd43b68b641b15189a4ad4"
                      alt="Dan Abramov"
                    />
                    <Text fontSize="sm" color="#616163">
                      Click-to-Pay is a secure way to pay online, powered by the
                      global payments industry.
                    </Text>
                    <Text fontSize="sm" color="#616163">
                      Add cards from participating networks to simply and
                      securely use them wherever Click-to-Pay is supported.
                    </Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
            >
              <HStack alignItems={"center"}>
                <MdEmail size="1.5em" />
                <Text fontSize="sm" color="#616163">
                  Please enter the email address where you would like to receive
                  your confirmation.
                </Text>
              </HStack>
              <FormControl isRequired>
                <Box>
                  <FormLabel>Email address:</FormLabel>
                  <Input type="email" maxW="30%" />
                </Box>
              </FormControl>
            </VStack>
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
            >
              <Text fontSize="xl" as="b">
                Important information
              </Text>
              <UnorderedList pl={4} fontSize="sm" color="grey" spacing="1em">
                <ListItem>
                  This rate is non-refundable. If you change or cancel your
                  booking you will not get a refund or credit to use for a
                  future stay. This policy will apply regardless of COVID-19,
                  subject to any local consumer laws.
                </ListItem>
                <ListItem>
                  No refunds will be issued for late check-in or early
                  check-out.
                </ListItem>
                <ListItem>Stay extensions require a new reservation.</ListItem>
                <ListItem>
                  This property offers transfers from the airport. Guests must
                  contact the property with arrival details before travel, using
                  the contact information on the booking confirmation. Front
                  desk staff will greet guests on arrival. For more details,
                  please contact the property using the information on the
                  booking confirmation.
                </ListItem>
                <ListItem>
                  To register at this property, guests who are Indian citizens
                  must provide a valid photo identity card issued by the
                  Government of India; travelers who are not citizens of India
                  must present a valid passport and visa.
                </ListItem>
              </UnorderedList>
              <Text fontSize="sm" color="#616163">
                Please enter the email address where you would like to receive
                your confirmation.
              </Text>
              <Text py="1em" fontSize="sm">
                By clicking on the button below, I acknowledge that I have
                reviewed the Privacy Statement Opens in a new window. and
                Government Travel Advice Opens in a new window. and have
                reviewed and accept the Rules & Restrictions Opens in a new
                window. and Terms of Use
              </Text>
              <Button onClick={completeBooking}
                border="1px"
                borderColor="black"
                minH="2.5em"
                maxW={{md: '60%', lg: '35%' }}
                fontSize="120%"
                className="completeBook"
                bgGradient="linear(to-b, #90c50c, #729a0d)"
                _hover={{ bg: "#90c50c" }}
              >
                Complete Booking{" "}
                <Flex alignItems="center" direction="column" my="auto">
                  <IoIosArrowForward />
                </Flex>
              </Button>
              <HStack alignItems={"center"} pt="1em">
                <HiLockClosed size="1.5em" />
                <Text fontSize="sm" color="#616163">
                  We use secure transmission and encrypted storage to protect
                  your personal information.
                </Text>
              </HStack>
              <Text fontSize="sm" color="#616163">
                This payment will be processed in the U.S. This does not apply
                when the travel provider (airline/hotel/rail, etc.) processes
                your payment.
              </Text>
            </VStack>
          </VStack>
        </VStack>
        <VStack className="second">
          <VStack width="100%">
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
              width="100%"
            >
              <Box>
                <Image
                  width="100%"
                  src="https://images.trvl-media.com/hotels/6000000/5640000/5637600/5637575/d0332a8e_l.jpg"
                  alt="Dan Abramov"
                />
              </Box>
              <VStack spacing="0.5em" alignItems={"left"} color="grey">
                <Text fontSize="sm">9.2/10 Wonderful (346 reviews)</Text>
                <Text fontSize="sm">
                  Guests rated this property 9.4/10 for cleanliness
                </Text>
                <Text fontSize="sm">
                  <Text as="b">1 Room: </Text>Deluxe Twin Room, 2 Twin/Single
                  Beds, Non Smoking
                </Text>
                <Flex
                  onClick={onOpen}
                  fontSize={"sm"}
                  color="red.400"
                  alignItems={"center"}
                  gap="0.2em"
                >
                  <Link>Non-refundable</Link>
                  <AiOutlineInfoCircle />
                </Flex>
                <AlertDialog
                  size="2xl"
                  motionPreset="slideInBottom"
                  onClose={onClose}
                  isOpen={isOpen}
                  isCentered
                >
                  <AlertDialogOverlay />
                  <AlertDialogContent>
                    <AlertDialogHeader> </AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody pb="1em">
                      If you change or cancel your booking you will not get a
                      refund or credit to use for a future stay. This policy
                      will apply regardless of COVID-19, subject to any local
                      consumer laws.
                    </AlertDialogBody>
                  </AlertDialogContent>
                </AlertDialog>
                <Text fontSize="sm">
                  <Text as="b">Check-in:</Text> Dec 31, 2022
                </Text>
                <Text fontSize="sm">
                  <Text as="b">Check-out: </Text>Jan 1, 2023
                </Text>
                <Text fontSize="sm">1-night stay</Text>
              </VStack>
            </VStack>
            <VStack
              p="1em"
              backgroundColor={"white"}
              textAlign="left"
              alignItems={"left"}
              width="100%"
            >
              <Text fontSize="xl" as="b">
                Price details
              </Text>
              <HStack justifyContent="space-between">
                <Text>1 room x 1 night</Text>
                <Text>$146.07</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Taxes and fees</Text>
                <Text>$26.29</Text>
              </HStack>
              <HStack as="b" justifyContent="space-between">
                <Text>Total</Text>
                <Text>$172.36</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        </div>
    </VStack>
  );
};

export default Checkout;
