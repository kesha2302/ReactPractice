// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Prac1 from './Components/Prac1';
import Prac2 from './Components/Prac2';
import Prac3 from './Components/Prac3';
import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Prac1/>
      <Prac2></Prac2> */}
      {/* <Prac3/> */}

      {/* <Home/> */}
      <Contact/>

    </div>
  );
}

export default App;
