import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './style/index.css'
import './style/fd2.css'

class Fd2Cn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bg: "hidden",
            textBlue: "",
            textWhite: "hidden",
        }
    }

    handleEnLang = () => {
        this.props.history.push('/')
    }

    handleThLang = () => {
        this.props.history.push('/')
    }

    handleCnLang = () => {
        this.props.history.push('/cn')
    }

    render() {
        return (
            <div className="fd2">
                <img class="bg" alt="alt" src="./images/fd2/bg.png" />
                <img class="side-bar" alt="alt" src="./images/fd2/side-bar.png" />

                
                <img class="en-bg hidden" alt="alt" src="./images/lang-bg.png" />
                <img class="en-flag" alt="alt" src="./images/fd2/en-flag.png" />
                <img class="en en-text-blue" alt="alt" src="./images/fd2/en.png" />
                <img class="en en-text-white hidden" alt="alt" src="./images/fd2/en-white.png" />
                <div class="en-lang" onClick={this.handleEnLang}></div>
                
                <img class="th-bg hidden" alt="alt" src="./images/lang-bg.png" />
                <img class="th-flag" alt="alt" src="./images/fd2/th-flag.png" />
                <img class="th th-text-blue" alt="alt" src="./images/fd2/th.png" />
                <img class="th th-text-white hidden" alt="alt" src="./images/fd2/th-white.png" />
                <div class="th-lang" onClick={this.handleThLang}></div>

                <img className="cn-bg" alt="alt" src="./images/lang-bg.png" />
                <img className="cn-flag" alt="alt"src="./images/fd2/cn-flag.png" />
                <img className="cn cn-text-blue hidden" alt="alt" src="./images/fd2/cn.png" />
                <img className="cn cn-text-white" alt="alt" src="./images/fd2/cn-white.png" />
                <div className="cn-lang" onClick={this.handleCnLang}></div>

                <img class="back" alt="alt" src="./images/fd2/back.png" />
                <img class="home" alt="alt" src="./images/fd2/home.png" />
                <img class="arrow-up" alt="alt" src="./images/fd2/arrow-up.png" />
                <img class="arrow-down" alt="alt" src="./images/fd2/arrow-down.png" />

                <img class="no-78" alt="alt" src="./images/fd2/no-78.png" />
                <img class="no-74" alt="alt" src="./images/fd2/no-74.png" />
                <img class="no-1" alt="alt" src="./images/fd2/no-1.png" />

                <img class="kingpower-logo-blue" alt="alt" src="./images/fd2/kingpower-logo-blue.png" />
                <img class="mahanakhon-logo" alt="alt" src="./images/fd2/mahanakhon-logo.png" />

                <div uk-scrollspy="target: > img; cls: uk-animation-slide-left; delay: 150">
                    <img class="headline-mahanakhon" alt="alt" src="./images/fd2/headline-mahanakhon.png" />
                    <img class="text-1" alt="alt" src="./images/fd2/text-1.png" />
                    <img class="headline-mahanakhon-highlight" alt="alt" src="./images/fd2/headline-mahanakhon-highlight.png" />
                    <img class="text-2" alt="alt" src="./images/fd2/text-2.png" />
                </div>

                <div uk-scrollspy="target: > img; cls: uk-animation-scale-up; delay: 600;">
                    <img class="lev-78" alt="alt" src="./images/fd2/lev-78.png" />
                </div>
                <img class="big-img-1" alt="alt" src="./images/fd2/big-img-1.png" />
                <img class="dec-1" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-1.png" />
                <img class="dec-2" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-2.png" />

                <img class="text-3" uk-parallax="x: 600,0; viewport: 0.5;" alt="alt" src="./images/fd2/text-3.png" />
                <img class="text-4" uk-parallax="x: -600,0; viewport: 0.5;" alt="alt" src="./images/fd2/text-4.png" />
                <img class="text-5" uk-parallax="x: 600,0; viewport: 0.5;" alt="alt" src="./images/fd2/text-5.png" />
                <img class="text-6" uk-parallax="x: -600,0; viewport: 0.5;" alt="alt" src="./images/fd2/text-6.png" />

                <img class="hexa-frame hexa-frame-1" alt="alt" src="./images/hexa-frame.png" />
                <img class="hexa-frame hexa-frame-2" alt="alt" src="./images/hexa-frame.png" />
                <img class="hexa-frame hexa-frame-3" alt="alt" src="./images/hexa-frame.png" />
                <img class="hexa-frame hexa-frame-4" alt="alt" src="./images/hexa-frame.png" />

                <div class="prx hexa-img-1" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-1.png);"></div>
                <div class="prx hexa-img-2" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-2.png);"></div>
                <div class="prx hexa-img-3" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-3.png);"></div>
                <div class="prx hexa-img-4" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-4.png);"></div>

                <img class="lev-74" uk-parallax="opacity: 0,1,1; scale: 0.5,1.4,1; viewport: 0.5;" alt="alt" src="./images/fd2/lev-74.png" />
                <img class="text-7" uk-parallax="opacity: 0,1; scale: 0.5,1; viewport: 0.5;" alt="alt" src="./images/fd2/text-7.png" />

                <img class="big-vdo-1" alt="alt" src="./images/fd2/big-vdo-1.png" />
                <img class="dec-3" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-3.png" />
                <img class="dec-4" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-4.png" />
                <img class="text-8" uk-parallax="x: -600,0; opacity: 0,1; viewport: 0.5;" alt="alt" src="./images/fd2/text-8.png" />

                <img class="text-9" uk-parallax="x: 600,0; viewport: 0.5;" alt="alt" src="./images/fd2/text-9.png" />
                <img class="text-10" uk-parallax="x: -600,0; viewport: 0.5;" alt="alt" src="./images/fd2/text-10.png" />
                <img class="hexa-frame hexa-frame-5" alt="alt" src="./images/hexa-frame.png" />
                <img class="hexa-frame hexa-frame-6" alt="alt" src="./images/hexa-frame.png" />
                <div class="prx hexa-img-5" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-5.png);"></div>
                <div class="prx hexa-img-6" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-6.png);"></div>

                <img class="lev-1" uk-parallax="opacity: 0,1,1; scale: 0.5,1.4,1; viewport: 0.5;" alt="alt" src="./images/fd2/lev-1.png" />

                <img class="big-img-2" alt="alt" src="./images/fd2/big-img-2.png" />
                <img class="dec-5" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-5.png" />
                <img class="dec-6" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-6.png" />

                <img class="text-11" uk-parallax="x: 600,0; viewport: 1;" alt="alt" src="./images/fd2/text-11.png" />
                <img class="text-12" uk-parallax="x: -600,0; viewport: 1;" alt="alt" src="./images/fd2/text-12.png" />
                <img class="hexa-frame hexa-frame-7" alt="alt" src="./images/hexa-frame.png" />
                <img class="hexa-frame hexa-frame-8" alt="alt" src="./images/hexa-frame.png" />
                <div class="prx hexa-img-7" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-7.png);"></div>
                <div class="prx hexa-img-8" uk-parallax="bgy: -200;" style="background-image: url(./images/fd2/hexa-img-8.png);"></div>
            </div>
        )
    }
}

export default Fd2Cn