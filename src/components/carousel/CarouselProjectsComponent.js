import React, {Component} from 'react'
import Sheep from '../image/sheep.jpg'
import './CarouselProjectsComponent.css'

class CarouselProjectsComponent extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" src={Sheep} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Weather Application on Android</h1>
                            <p> I may not be the perfect guy. I may not always remember special dates or the places we went to on our first few dates.
                                I won’t, for the life of me, remember exactly where we had our first kiss or first held hands. But I will remember this:
                                I will remember each time you need me. When you need me to pick you up or to take you to your monthly doctor’s checkup.
                                I’ll remember when you say you want to watch a movie or try out a new restaurant. I guess what I want to say is this:
                                I may not remember much about the past, but what’s always on my mind is my future with you</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={Sheep} alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Using Internal Sensors on Android and MoveSense</h1>
                            <p> I may not be the perfect guy. I may not always remember special dates or the places we
                                went to on our first few dates.
                                I won’t, for the life of me, remember exactly where we had our first kiss or first held
                                hands. But I will remember this:
                                I will remember each time you need me. When you need me to pick you up or to take you to
                                your monthly doctor’s checkup.
                                I’ll remember when you say you want to watch a movie or try out a new restaurant. I
                                guess what I want to say is this:
                                I may not remember much about the past, but what’s always on my mind is my future with
                                you</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={Sheep} alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>SmartScan</h1>
                            <p> I may not be the perfect guy. I may not always remember special dates or the places we
                                went to on our first few dates.
                                I won’t, for the life of me, remember exactly where we had our first kiss or first held
                                hands. But I will remember this:
                                I will remember each time you need me. When you need me to pick you up or to take you to
                                your monthly doctor’s checkup.
                                I’ll remember when you say you want to watch a movie or try out a new restaurant. I
                                guess what I want to say is this:
                                I may not remember much about the past, but what’s always on my mind is my future with
                                you</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    };
}

export default CarouselProjectsComponent;