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

                    <ScrollAnimation animateIn="fadeIn">
                        <div className="project-area">
                            <section className="project-text">
                                <h1 className="display-4"><span className="highlight">PROJECTS</span></h1>
                            </section>
                        </div>
                    </ScrollAnimation>

                    <CarouselProjectsComponent/>
                </div>


                <div className="page" style={{background: "black"}}>

                    <ScrollAnimation animateIn="fadeIn">
                        <div className="project-area">
                            <section className="project-text-section">
                                <h1 className="display-4">ABOUT</h1>
                                <div className="about-text">
                                    <ScrollAnimation animateIn="bounceInLeft">
                                        <h1>Hej</h1>
                                    </ScrollAnimation>
                                </div>
                            </section>
                        </div>
                    </ScrollAnimation>

                </div>

            </div>
        );
    }
}

export default ViewController