import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './Components/AboutUs/About';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Careers from './Components/Careers';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer/Footer'
import './App.css';

class App extends React.Component{
   render(){
    return(
      <Router>
        <div>
        <Navbar />
        <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/courses" exact Component={Courses} />
            <Route path="/careers" exact Component={Careers} />
            <Route path='/aboutus' exact Component={AboutUs} />
            <Route path='*' Component={NotFound} />
        </Routes>
        <Footer/>
      </div>
      </Router>
    )
   }
}

export default App;
