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
                            <ScrollAnimation animateIn="bounceInLeft">
                                <p>My name is <span className="highlight"> Ricardo Mayta Lavalle</span> and I'm a <span className="highlight"> Computer Engineer Student </span>at
                                    <br/>Royal Institute of Technology in Stockholm.
                                    <br/>Currently I'm planning to <span className="highlight"> graduate</span> in <span className="highlight">2021</span>.
                                </p>
                                <h4>Tools & Technology</h4>
                                <p>Languages: Python, Java, C, Node.JS</p>
                                <p>React, </p>

                            </ScrollAnimation>
                        </div>
                        <div className="ib">
                            <div className="container">
                                    <img src={Cursed} alt="selfie 2021"/>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="page" style={{background: "black"}}>
                    <div className="box">
                        <div className="ib">
                            <h1>ABOUT ME</h1>
                            <p>My name is Ricardo Mayta Lavalle and I'm a Computer Engineer Student at Royal Institute of Technology.
                                Currently I'm planning to graduate in 2021.
                            </p>
                        </div>
                        <div className="ib">
                            <div className="container">
                                <img src={Sheep} alt="selfie 2021"/>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="page" style={{background: "black"}}>

                    <ScrollAnimation animateIn="fadeIn">
                        <div className="about-area">
                            <section className="about">
                                <h1 className="display-4">ABOUT</h1>
                            </section>
                            <div className="rowC">
                                <div className="ib">
                                    <h1>Hello!</h1>
                                    <p>My name is <span className="highlight">Ricardo Mayta Lavalle</span> </p>
                                    <p>I'm a Computer Engineer Student at Royal Institute of Technology in Stockholm, Sweden.</p>
                                    <p>Currently I'm planning to graduate in 2021.</p>
                                </div>
                                <div className="about-image">
                                    <h1>Image</h1>

                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                </div>



                <div className="page" style={{background: "black"}}>

                    <ScrollAnimation animateIn="fadeIn">
                        <div className="project-area">
                            <section className="project-text">
                                <h1 className="display-4"><span className="highlight">PROJECTS</span></h1>
                            </section>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="page" style={{background: "black"}}>
                    <div className="rowC">
                        <div className="project-title">
                            <h1>
                                ScanSmart
                            </h1>
                            <p>A self-scanning tool that will give users recommendations on how to improve their
                                environmental impact when grocery shopping based on what is in their shopping cart.</p>
                        </div>
                        <div className="project-image">
                            <h1>
                                Image
                            </h1>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ViewController