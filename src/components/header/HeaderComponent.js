import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import "./HeaderComponent.css"
import Logo from '../icon/ricml-logo-v7.png'

class HeaderComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            recipient: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
    }

    handleCallback = (autoSuggest) => {
    }

    render(){
        return(
            <header className="site-header">
                <section className="top-header-area">
                    <div className="inner-header content">
                        <div className="about-area">
                            <a href="/about">About</a>
                        </div>
                        <div className="logo-area">
                            <img className="logo-image" src={Logo}/>
                        </div>
                        <div className="social-area">
                            <ul>
                                <li><a href="https://github.com/MiguelMaytaLavalle"><i className="fa fa-github fa-3x"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/ricardo-mayta-lavalle-209665182/"><i id="icon" className="fa fa-linkedin fa-3x"></i></a></li>
                                <li><a href="/contact"><i className="fa fa-envelope-o fa-3x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}

export default (HeaderComponent)