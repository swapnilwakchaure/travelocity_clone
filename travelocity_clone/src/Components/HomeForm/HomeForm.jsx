import styles from "./HomeForm.module.css";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  VStack,
  Grid,
  Flex,
  Hide,
  useToast,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { BsCalendarCheck, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeForm = () => {
  const toast = useToast()
  const handleFormClick = () => {
    toast({
      title: 'Details added',
      status: 'success',
      duration: 2000,
    })
  };

  return (
    <div className={styles.form_main}>
      {/* <div className={styles.form_container}> */}
      <VStack className={styles.form_container}>
        <Hide below='md'>
        <div className={styles.form_navbar}>
          <div>
            <p>Stays</p>
            <p>Flights</p>
            <p>Cars</p>
            <p>Packages</p>
            <p>Things to do</p>
            <p>Cruises</p>
          </div>
        </div>
        </Hide>
        <div className={styles.form_start}>
                <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2, 1fr)'}} gap='4'>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<GoLocation color="gray.300" />}
                  />
                  <Input
                    variant="outline"
                    type="location"
                    placeholder="Going to"
                  />
                </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsCalendarCheck color="gray.300" />}
                />
                <Input variant="outline" type="date" placeholder="check in" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsCalendarCheck color="gray.300" />}
                />
                <Input variant="outline" type="date" placeholder="check in" />
              </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPersonFill color="gray.300" />}
                  />
                  <Input
                    variant="outline"
                    type="select"
                    placeholder="Travelers"
                  />
                </InputGroup>
                </Grid>
                <Flex marginTop={4}>
                    <Flex>
                    <input type="checkbox" />
                <label style={{marginLeft:'0.5rem'}}>Add a flight</label>
                    </Flex>
                    <Flex marginLeft={4}>
                    <input type="checkbox" />
                <label style={{marginLeft:'0.5rem'}}>Add a car</label>
                    </Flex>
                </Flex>
            <Button variant="solid" colorScheme={'blue'} w={{base:'100%',md:'20%'}} mt={{base:'1rem'}}>
              <Link to="/products">Search</Link>
            </Button>
        </div>
      </VStack>
    </div>
  );
};

export default HomeForm;
