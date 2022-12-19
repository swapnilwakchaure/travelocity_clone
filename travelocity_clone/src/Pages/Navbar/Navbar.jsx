import styles from "./Navbar.module.css";
import Travelgo from "../../Assets/travelgo1.png";
import { FaShoppingBag } from "react-icons/fa";
import { Select } from "@chakra-ui/react";
import HomeAccount from "../../Components/HomeAccount/HomeAccount";
import { useState } from "react";
import { MdAccountCircle } from 'react-icons/md';
import { BsFillHandbagFill } from 'react-icons/bs';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isUserAuth, setIsUserAuth] = useState(false);

    const userAuth = useSelector((store)=>store.auth)
    const {isAuth,username} = userAuth
    return (
        <div className={styles.nav_main}>
            <div className={styles.nav_first_part}>
                <div className={styles.nav_logo}>
                    <Link to='/'>
                    <img src={Travelgo} alt="travelgo-image" />
                    </Link>
                    
                </div>
                <div className={styles.nav_select_tag}>
                    <select name="" id="" placeholder="More Travel">
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
                    </select>
                </div>
            </div>
            <div className={styles.nav_second_part}>
                <div>Espanol</div>
                <Link to='/listYourProperty'><div>List your property</div></Link>
                <div>Support</div>
                <div>Trips</div>
                {/* <div>Sign in</div> */}
                <div>
                     <HomeAccount login={"Sign In"} />
                </div>
            </div>
            <div className={styles.nav_responsive_part}>
                <BsFillHandbagFill color="white" />
                <MdAccountCircle color="white" />
            </div>
        </div>
    )
}

export default Navbar;