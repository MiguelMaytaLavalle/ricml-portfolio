import React, {Component} from 'react';
import HeaderComponent from "../header/HeaderComponent";
import "./ViewController.css"
import "animate.css/animate.min.css";
import Forest from "../video/forest-background.mp4";
import styled, {keyframes} from 'styled-components';
import {fadeInLeft, fadeInDown, fadeIn} from 'react-animations';
import CardComponent from "../card/CardComponent";
import ScrollAnimation from 'react-animate-on-scroll'
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


                <div className="hero-overlay-home" style={{minHeight:"min-height: 100vh;"}}>
                    <video className="video-overlay" autoPlay loop muted>
                        <source src="https://www.youtube.com/watch?v=lARaX6d8tvw"/>
                    </video>
                    <div className="hero-overlay"></div>
                </div>

                <div className="page">
                    <div className="intro-area">
                        <section className="intro-text-section">
                            <div className="intro-text">
                                <h2>Hello, I'm <span className="highlight">Ricardo.</span></h2>
                                <h2>I'm a <span className="highlight">Computer Engineer student</span> who values </h2>
                                <h2>I'm a <span className="highlight">Computer Engineer student</span> who values </h2>
                                <h4>Currently planning <span className="highlight">graduation</span> in <span className="highlight">2021</span></h4>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="page" style={{background:"black"}}>
                    <div className="intro-area">
                        <section className="intro-text">
                            <div>
                                <h1 className="display-3">PROJECTS</h1>
                            </div>
                        </section>
                    </div>
                    <ScrollAnimation animateIn="fadeIn"  style={{paddingBottom:"13em", animationDuration:"2s"}}>
                        <CardComponent className="card-component"/>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animateIn='flipInY' style={{background:"red"}}>
                    <h1>
                        animateIn
                    </h1>
                </ScrollAnimation>

                <div className="page" style={{background:"blue"}}>
                    <ScrollAnimation animateIn='fadeIn'>
                        <h1>
                            animateIn
                        </h1>
                    </ScrollAnimation>
                </div>
                <div className="page" style={{background:"black"}}>
                </div>
            </div>
        );
    }
}

export default ViewController