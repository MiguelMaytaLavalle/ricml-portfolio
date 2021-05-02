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
                        <source src={Forest}/>
                    </video>
                    <div className="hero-overlay"></div>
                </div>




                <div className="page">
                    <div className="intro-area">
                        <section className="intro-text">
                            <div>
                                <h1 className="display-3">Hi!</h1>

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