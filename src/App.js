import React, {useState} from 'react'
import Credit from './components/Credit';
import Dropdown from './components/Dropdown';
import FoodSection from './components/FoodSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MshayiSection from './components/MshayiSection';
import Navbar from './components/Navbar';
import Events from './components/Products';
import { FoodData } from './data/FoodData';
import { InfoData } from './data/InfoData';
import { MshayiBio } from './data/MshayiBio';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import {eventData} from './components/Products/data';
import {foodData} from './components/Products/FoodMenuData';
import Food from './components/Products/Food';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <GlobalStyle />
    {/* <CovidLink /> */}
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    <Events heading="Rands CPT Events" data={eventData}/>
    <FoodSection {...FoodData} />
    <Food heading="Rands CPT Food Menu" data={foodData}/>
    <MshayiSection {...MshayiBio} />
    <About {...MshayiBio}/>
    <Contact />
    <Footer />
    <Credit />
    </div>
  );
}

export default App;
