import styles from "./HomeForm.module.css";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { BsCalendarCheck, BsPersonFill } from "react-icons/bs";

const HomeForm = () => {
    const handleFormClick = () => {
        alert("form submit");
    }

    return (
        <div className={styles.form_main}>
            <div className={styles.form_container}>
                <div className={styles.form_navbar}>
                    <div>
                        <p>Stays</p>
                        <p>Flights</p>
                        <p>Cars</p>
                        <p>Packages</p>
                        <p>Things to do</p>
                        <p>Cruises</p>
                    </div>
                    <hr />
                </div>
                <div className={styles.form_start}>
                    <form>
                        <div>
                            <div>
                                <InputGroup w="100%" m="20px">
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<GoLocation color='gray.300' />}
                                    />
                                    <Input variant="outline" type='location' placeholder='Going to' />
                                </InputGroup>
                            </div>
                            <div>
                                <InputGroup w="80%" m="20px 50px">
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BsCalendarCheck color='gray.300' />}
                                    />
                                    <Input variant="outline" type='date' placeholder='check in' />
                                </InputGroup>
                            </div>
                            <div>
                                <InputGroup w="80%" m="20px 30px">
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BsCalendarCheck color='gray.300' />}
                                    />
                                    <Input variant="outline" type='date' placeholder='check in' />
                                </InputGroup>
                            </div>
                            <div>
                                <InputGroup w="90%" m="10px">
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BsPersonFill color='gray.300' />}
                                    />
                                    <Input variant="outline" type='select' placeholder='Travelers' />
                                </InputGroup>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" />
                                <label>Add a flight</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>Add a car</label>
                            </div>
                        </div>
                        <Button variant="solid" onClick={handleFormClick}>Search</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeForm;