import Footer from "../../Components/FooterPage/FooterPage";
import HomeAvatar from "../../Components/HomeForm/HomeAvatar";
import HomeForm from "../../Components/HomeForm/HomeForm"
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <HomeForm />
            <div className={styles.Home_make_some_space}></div>
            <HomeAvatar />
            <Footer />
        </div>
    )
}

export default Home;