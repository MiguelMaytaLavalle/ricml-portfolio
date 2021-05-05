import './App.css';
import {Component} from "react/cjs/react.production.min";
import ViewController from "./components/viewcontroller/ViewController";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component{
  render(){
    return(
        <ParallaxProvider>
        <div className="App">

                <ViewController/>

        </div>
  </ParallaxProvider>
    );
  }
}

export default App;
