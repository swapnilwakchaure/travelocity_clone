import React from "react";
import "./Checkout.css";
import { MdOutlineDone, MdKeyboardArrowDown } from "react-icons/md";
import {
  Checkbox,
  Button,
  FormControl,
  Badge,
  FormLabel,Alert,
  Select,
  InputRightElement,AlertTitle,AlertDescription,
  Textarea,
  InputGroup,
  InputLeftAddon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Accordion,
  VStack,
  Spacer,
  Text,
  HStack,
  Input,
  Flex,
  Link,
  Stack,
  Box,
} from "@chakra-ui/react";

const Checkout = () => {
  return (
    <div>
      <Stack backgroundColor="#ededed" pl="10em">
        <VStack textAlign="left" alignItems={"left"}>
          <Text fontSize="3xl" as="b">
            Secure booking — only takes 2 minutes!
          </Text>
          <Flex alignItems="center" color="green" gap="1em">
            <MdOutlineDone fontSize="1.2em" />
            <Text fontSize="xl">
              You've picked a winner! This hotel is rated 9.2/10.
            </Text>
          </Flex>
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
                  <Input type="text" />
                </Box>
                <Box>
                  <FormLabel>Last name</FormLabel>
                  <Input type="text" />
                </Box>
              </HStack>
              <Box mb={3}>
                <FormLabel>Mobile phone number</FormLabel>
                <InputGroup gap="0.5em">
                  <Select width="10%">
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
                Receive text alerts about this trip. Message and data rates may
                apply.
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
                    them directly to confirm. The property may charge a fee for
                    certain special requests.
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
            <Alert>
              <AlertTitle> Important:</AlertTitle>
              <AlertDescription>
              Trip cancellation due to government travel advisories, fear of travel, or change of mind is not covered. Travel insurance may provide coverage for COVID-19 diagnosed illness. COVID-19 is a foreseen event and certain other coverages will not apply.
              </AlertDescription>
            </Alert>
          </VStack>
        </VStack>
        <VStack></VStack>
      </Stack>
    </div>
  );
};

export default Checkout;
