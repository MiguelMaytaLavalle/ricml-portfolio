import React, {Component} from 'react'
import './CardComponent.css'
import Sheep from '../image/sheep.jpg'

class CardComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-row flex-nowrap overflow-auto" id="card-row">

                    <div className="col-xs-12 col-sm-4">
                        <div className="card">
                            <a className="card-image" href="">
                                <img src={Sheep}/>
                            </a>
                            <div className="card-content" href="">
                                <h4 className="card-title">
                                    <a href="">ScanSmart</a>
                                </h4>
                                <p>
                                    Made in Android Studio with Java
                                </p>
                            </div>
                            <div className="card-readmore">
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-4">
                        <div className="card">
                            <a className="card-image" href="">
                                <img src={Sheep}/>
                            </a>
                            <div className="card-content" href="">
                                <h4 className="card-title">
                                    <a href="">Social Media Platform</a>
                                </h4>
                                <p>
                                    Made in Android Studio with Java
                                </p>
                            </div>
                            <div className="card-readmore">
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-4">
                        <div className="card">
                            <a className="card-image" href="">
                                <img src={Sheep}/>
                            </a>
                            <div className="card-content" href="">
                                <h4 className="card-title">
                                    <a href="">Reading Internal Sensors from Mobile Device and MoveSense</a>
                                </h4>
                                <p>
                                    Made in Android Studio with Java
                                </p>
                            </div>
                            <div className="card-readmore">
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-4">
                        <div className="card">
                            <a className="card-image" href="">
                                <img src={Sheep}/>
                            </a>
                            <div className="card-content" href="">
                                <h4 className="card-title">
                                    <a href="">Weather Application for Android</a>
                                </h4>
                                <p>
                                    Made in Android Studio with Java
                                </p>
                            </div>
                            <div className="card-readmore">
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}

export default CardComponent;