import React, {Component} from 'react';
import HeaderComponent from "../header/HeaderComponent";
import "./ViewController.css"
import Forest from "../video/forest-background.mp4";

class ViewController extends Component{
    render(){
        return(
            <div className="App">
                <HeaderComponent/>
                <div className="hero-overlay-home">
                    <video className="video-overlay" autoPlay loop muted>
                        <source src={Forest}/>
                    </video>
                    <div className="hero-overlay"></div>
                </div>
                <div className="intro-area">
                    <section className="intro-text">
                        <h1>Projects</h1>
                    </section>
                </div>
                <section>
                    <grid></grid>
                </section>
            </div>
        );
    }
}
export default ViewController