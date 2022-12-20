// import Footer from "../../Components/FooterPage/FooterPage";
import HomeAvatar from "../../Components/HomeForm/HomeAvatar";
import HomeForm from "../../Components/HomeForm/HomeForm"
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.travelocity_home_page}>
            <HomeForm />
            <div className={styles.Home_make_some_space}></div>
            <HomeAvatar />
            <hr />
            {/* <Footer /> */}
        </div>
    )
}

export default Home;