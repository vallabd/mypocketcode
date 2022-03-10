
import './App.css';
import {Navbars} from './navbar/navbar';
import {Masthead} from'./masthead/masthead';
import {Services} from './services/services';
import { Footer } from "./Footer/Footer";
import {About} from './about/about';
import {Contact} from './Contact/Contact';

function App() {
  return<div className='App'>
      <Navbars />
      <Masthead />
      <Services/>
      <About />
      <Contact/>
      <Footer /> 

    </div>
  
}

export default App;
