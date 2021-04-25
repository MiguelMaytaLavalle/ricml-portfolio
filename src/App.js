import './App.css';
import {Component} from "react/cjs/react.production.min";
import ViewController from "./components/viewcontroller/ViewController";

class App extends Component{
  render(){
    return(
        <div className="App">
            <ViewController/>
        </div>
    );
  }
}

export default App;
