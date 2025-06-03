// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Prac1 from './Components/Prac1';
import Prac2 from './Components/Prac2';
import Prac3 from './Components/Prac3';
import Home from './Components/Home';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import Feedback from './Components/Feedback';
import Prac5 from './Components/Prac5';
import Prac6 from './Components/Prac6';
import FunProp from './Components/FunProp';
import ClassProp from './Components/ClassProp';
import ClassState from './Components/ClassState';
import Styling from './Components/Styling';
import EventBinding from './Components/EventBinding';
import ConditionalRendering from './Components/ConditionalRendering';
import IncreDecre from './Components/IncreDecre';
import Pcomponent from './Components/Pcomponent';
import List from './Components/List';
import List2 from './Components/List2';

function App() {
  return (
    <div className="App">

{/* 
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
      </Routes> */}

{/* <Prac5/> */}
{/* <Prac6/> */}

    {/* <HomePage/> */}

      {/* <Prac1/>
      <Prac2></Prac2> */}
      {/* <Prac3/> */}

      {/* <Home/> */}
      {/* <Contact/> */}
      {/* <FunProp name="kesha" subject="Maths" others={{email:'xyz@gmail.com', lname:'patel'}}/>
      <FunProp name="kinjal" subject="Maths" others={{email:'abc@gmail.com', lname:'shah'}}/> */}


     {/* <ClassProp  name="kesha" subject="Maths" others={{email:'xyz@gmail.com', lname:'patel'}}/> */}
     {/* <ClassState/> */}
     {/* <Styling paragraph={true}/> */}
     {/* <ConditionalRendering/> */}
     {/* <EventBinding/> */}
     {/* <Pcomponent/> */}
     {/* <List/> */}
     {/* <List2/> */}
     <IncreDecre/>

    </div>
  );
}

export default App;
