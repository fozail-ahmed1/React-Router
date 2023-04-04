import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App () {
    return(
    <BrowserRouter> 
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/card/:user' element={<Card/>}/>
            </Routes>
        </div>
    </BrowserRouter>   
    );
}

export default App;