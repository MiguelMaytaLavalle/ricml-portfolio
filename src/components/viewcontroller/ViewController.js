import React, {Component} from 'react';
import HeaderComponent from "../header/HeaderComponent";
import "./ViewController.css"
import "animate.css/animate.compat.css";
import Forest from "../video/forest-background.mp4";
import styled, {keyframes} from 'styled-components';
import {fadeInLeft, fadeInDown, fadeIn} from 'react-animations';
import CardComponent from "../card/CardComponent";
import ScrollAnimation from 'react-animate-on-scroll'
import CarouselProjectsComponent from "../carousel/CarouselProjectsComponent";
import Sheep from '../image/sheep.jpg'
import Cursed from '../image/Cursed.jpg'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInLeftDiv = styled.div`
  animation: 1s ${fadeInLeftAnimation};
`;
const FadeInDownDiv = styled.div`
  animation: 2s ${fadeInDownAnimation};
`;

class ViewController extends Component {
    render() {
        return (
                <div className="App">
                    <HeaderComponent/>


                    <div className="hero-overlay-home" style={{minHeight: "min-height: 100vh;"}}>
                        <video className="video-overlay" autoPlay loop muted>
                            <source src={Forest}/>
                        </video>
                        <div className="hero-overlay"></div>
                    </div>

                    <div className="page">
                        <div className="intro-area">
                            <section className="intro-text-section">
                                <div className="intro-text">
                                    <h3>Hello, I'm <span className="highlight">Ricardo.</span></h3>
                                    <h3>I'm a <span className="highlight">Computer Engineer student</span></h3>
                                    <h3></h3>
                                    <p>Currently planning to <span className="highlight">graduate</span> in <span
                                        className="highlight">2021</span></p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="page" style={{background: "black"}}>
                        <div className="box">
                            <div className="ib">
                                <h1>ABOUT ME</h1>
                                <ScrollAnimation animateIn="fadeIn">
                                    <p>
                                        My name is <span className="highlight"> Ricardo Mayta Lavalle</span> and I'm
                                        a <span className="highlight"> Computer Engineer Student </span>at
                                        <br/>Royal Institute of Technology in Stockholm. I have experience with
                                        <br/> software development and agile project methodologies.
                                    </p>
                                    <p>
                                        I'm currently planning to <span className="highlight"> graduate</span> in <span
                                        className="highlight"> 2021</span>.
                                    </p>

                                    <h4>Languages</h4>
                                    <p>Java, Python, C, SQL, HTML, CSS</p>
                                    <h4>Library & Frameworks</h4>
                                    <p>Spring Boot, React, Bootstrap, Node.js, Volley</p>
                                    <h4>Tools & Platform</h4>
                                    <p>Git, Docker, Jenkins, IntelliJ, Postman, Android Studio</p>

                                </ScrollAnimation>
                            </div>
                            <div className="ib">
                                <div className='container'>
                                    <img src={Cursed} alt="selfie 2021"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page" style={{background: "black"}}>
                        <div className="box">
                            <div className="ib">
                                <h1>ScanSmart</h1>
                                <ScrollAnimation animateIn="fadeIn">
                                    <p>
                                        A Self-scanning tool that gives a user recommendations on how to improve
                                        <br/>their enviromental impact when grocery shopping based on their shopping
                                        cart.
                                    </p>
                                    <h4>Technology</h4>
                                    <p>Java, MySQL, Spring Boot and Volley</p>

                                </ScrollAnimation>
                            </div>
                            <div className="ib">
                                <Parallax className='custom-class' y={[-40,70]}>
                                    <img src={Cursed} alt="selfie 2021"/>
                                </Parallax>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="page" style={{background: "black"}}>
                        <div className="box">
                            <div className="ib">
                                <h1>Internet forum</h1>
                                <ScrollAnimation animateIn="fadeIn">
                                    <p>
                                        A community webforum based on Facebook, Twitter. Users can post on their
                                        <br/>timeline or upload a diagram, and send private messages to other users.
                                        <br/>Users can create a room to draw on a whiteboard with other users.
                                        <br/>The web application was built with microservices.
                                    </p>
                                    <h4>Technology</h4>
                                    <p>React, Bootstrap, Spring Boot, Node.js, Vert.x</p>

                                </ScrollAnimation>
                            </div>
                            <div className="ib">
                                <Parallax className='custom-class' y={[-40,70]}>
                                    <img src={Cursed} alt="selfie 2021"/>
                                </Parallax>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="page" style={{background: "black"}}>
                        <div className="box">
                            <div className="ib">
                                <h1>Weather Application</h1>
                                <ScrollAnimation animateIn="fadeIn">
                                    <p>
                                        Uses API calls to the Swedish Meteorological and Hydrological Institute
                                        <br/>,SMHI, to present the weather forecast for a ten day period
                                    </p>
                                    <h4>Technology</h4>
                                    <p>Java, Volley</p>

                                </ScrollAnimation>
                            </div>
                            <div className="ib">
                                <Parallax className='custom-class' y={[-40,70]}>
                                    <img src={Cursed} alt="selfie 2021"/>
                                </Parallax>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="page" style={{background: "black"}}>
                        <div className="box">
                            <div className="ib">
                                <h1>LINKS</h1>
                                <ScrollAnimation animateIn="fadeIn">
                                    <p>
                                        
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}

export default ViewController
