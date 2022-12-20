import './App.css';
import MainRoutes from './Routes/MainRoutes';
import Home from './Pages/Home/Home';
import Navbar from "./Pages/Navbar/Navbar";
import Products from './Pages/Product/Products';
import AddProduct from './Pages/AddProduct/AddProduct';
import Footer from './Components/FooterPage/FooterPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer />
    </div>
  );
}

export default App;
