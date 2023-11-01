//import logo from '../../Images/logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Main />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
