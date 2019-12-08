import React, { Component } from 'react'
import './style/index.css'
import './style/fd2.css'

class Fd2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bg: "hidden",
            textBlue: "",
            textWhite: "hidden",
            // pathLang: "/",
            
            // clickedEnBg: "",
            // clickedEnTextBlue: "hidden",
            // clickedEnTextWhite: "",

            // clickedThBg: "hidden",
            // clickedThTextBlue: "",
            // clickedThTextWhite: "hidden",

            // clickedCnBg: "hidden",
            // clickedCnTextBlue: "",
            // clickedCnTextWhite: "hidden",
        }
    }

    // resetLang = () => {
    //     this.setState({
    //         clickedEnBg: "hidden",
    //         clickedEnTextBlue: "",
    //         clickedEnTextWhite: "hidden",

    //         clickedThBg: "hidden",
    //         clickedThTextBlue: "",
    //         clickedThTextWhite: "hidden",

    //         clickedCnBg: "hidden",
    //         clickedCnTextBlue: "",
    //         clickedCnTextWhite: "hidden",
    //     })
    // }

    // handleEnLang = () => {
    //     this.resetLang()
    //     this.setState({
    //         pathLang: "/",
    //         clickedEnBg: "",
    //         clickedEnTextBlue: "hidden",
    //         clickedEnTextWhite: "",
    //     })
    // }

    // handleThLang = () => {
    //     this.resetLang()
    //     this.setState({
    //         pathLang: "/th/",
    //         clickedThBg: "",
    //         clickedThTextBlue: "hidden",
    //         clickedThTextWhite: "",
    //     })
    // }

    // handleCnLang = () => {
    //     this.resetLang()
    //     this.setState({
    //         pathLang: "/cn/",
    //         clickedCnBg: "",
    //         clickedCnTextBlue: "hidden",
    //         clickedCnTextWhite: "",
    //     })
    // }

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
                <img className="bg" alt="alt" src="./images/fd2/bg.png" />
                <img className="side-bar" alt="alt" src="./images/fd2/side-bar.png" />
            
                <img className={`en-bg ${this.state.clickedEnBg}`} alt="alt" src="./images/lang-bg.png" />
                <img className="en-flag" alt="alt" src="./images/fd2/en-flag.png" />
                <img className={`en en-text-blue ${this.state.clickedEnTextBlue}`} alt="alt" src="./images/fd2/en.png" />
                <img className={`en en-text-white ${this.state.clickedEnTextWhite}`} alt="alt" src="./images/fd2/en-white.png" />
                <div className="en-lang" onClick={this.handleEnLang}></div>
            
                <img className={`th-bg ${this.state.clickedThBg}`} alt="alt" src="./images/lang-bg.png" />
                <img className="th-flag" alt="alt" src="./images/fd2/th-flag.png" />
                <img className={`th th-text-blue ${this.state.clickedThTextBlue}`} alt="alt" src="./images/fd2/th.png" />
                <img className={`th th-text-white ${this.state.clickedThTextWhite}`} alt="alt" src="./images/fd2/th-white.png" />
                <div className="th-lang" onClick={this.handleThLang}></div>
            
                <img className={`cn-bg ${this.state.clickedCnBg}`} alt="alt" src="./images/lang-bg.png" />
                <img className="cn-flag" alt="alt" src="./images/fd2/cn-flag.png" />
                <img className={`cn cn-text-blue ${this.state.clickedCnTextBlue}`} alt="alt" src="./images/fd2/cn.png" />
                <img className={`cn cn-text-white ${this.state.clickedCnTextWhite}`} alt="alt" src="./images/fd2/cn-white.png" />
                <div className="cn-lang" onClick={this.handleCnLang}></div>
            
                <img className="back" alt="alt" src="./images/fd2/back.png" />
                <img className="home" alt="alt" src="./images/fd2/home.png" />
                <img className="arrow-up" alt="alt" src="./images/fd2/arrow-up.png" />
                <img className="arrow-down" alt="alt" src="./images/fd2/arrow-down.png" />
            
                <img className="no-78" alt="alt" src="./images/fd2/no-78.png" />
                <img className="no-74" alt="alt" src="./images/fd2/no-74.png" />
                <img className="no-1" alt="alt" src="./images/fd2/no-1.png" />
            
                <img className="kingpower-logo-blue" alt="alt" src="./images/fd2/kingpower-logo-blue.png" />
                <img className="mahanakhon-logo" alt="alt" src="./images/fd2/mahanakhon-logo.png" />
            
                <div uk-scrollspy="target: > img; cls: uk-animation-slide-left; delay: 150">
                    <img className="headline-mahanakhon" alt="alt" src={`./images/fd2${this.state.pathLang}headline-mahanakhon.png`} />
                    <img className="text-1" alt="alt" src={`./images/fd2${this.state.pathLang}text-1.png`} />
                    <img className="headline-mahanakhon-highlight" alt="alt" src={`./images/fd2${this.state.pathLang}headline-mahanakhon-highlight.png`} />
                    <img className="text-2" alt="alt" src={`./images/fd2${this.state.pathLang}text-2.png`} />
                </div>
            
                <div uk-scrollspy="target: > img; cls: uk-animation-scale-up; delay: 600;">
                    <img className="lev-78" alt="alt" src={`./images/fd2${this.state.pathLang}lev-78.png`} />
                </div>
                <img className="big-img-1" alt="alt" src="./images/fd2/big-img-1.png" />
                <img className="dec-1" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-1.png" />
                <img className="dec-2" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-2.png" />
            
                <img className="text-3" uk-parallax="x: 600,0; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-3.png`} />
                <img className="text-4" uk-parallax="x: -600,0; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-4.png`} />
                <img className="text-5" uk-parallax="x: 600,0; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-5.png`} />
                <img className="text-6" uk-parallax="x: -600,0; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-6.png`} />
            
                <img className="hexa-frame hexa-frame-1" alt="alt" src="./images/hexa-frame.png" />
                <img className="hexa-frame hexa-frame-2" alt="alt" src="./images/hexa-frame.png" />
                <img className="hexa-frame hexa-frame-3" alt="alt" src="./images/hexa-frame.png" />
                <img className="hexa-frame hexa-frame-4" alt="alt" src="./images/hexa-frame.png" />
                
                <div className="prx hexa-img-1" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-1.png)`}}></div>
                <div className="prx hexa-img-2" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-2.png)`}}></div>
                <div className="prx hexa-img-3" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-3.png)`}}></div>
                <div className="prx hexa-img-4" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-4.png)`}}></div>
            
                <img className="lev-74" uk-parallax="opacity: 0,1,1; scale: 0.5,1.4,1; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}lev-74.png`} />
                <img className="text-7" uk-parallax="opacity: 0,1; scale: 0.5,1; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-7.png`} />
            
                <img className="big-vdo-1" alt="alt" src="./images/fd2/big-vdo-1.png" />
                <img className="dec-3" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-3.png" />
                <img className="dec-4" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-4.png" />
                <img className="text-8" uk-parallax="x: -600,0; opacity: 0,1; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-8.png`} />
            
                <img className="text-9" uk-parallax="x: 600,0; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-9.png`} />
                <img className="text-10" uk-parallax="x: -600,0; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}text-10.png`} />
                <img className="hexa-frame hexa-frame-5" alt="alt" src="./images/hexa-frame.png" />
                <img className="hexa-frame hexa-frame-6" alt="alt" src="./images/hexa-frame.png" />
                <div className="prx hexa-img-5" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-5.png)`}}></div>
                <div className="prx hexa-img-6" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-6.png)`}}></div>
            
                <img className="lev-1" uk-parallax="opacity: 0,1,1; scale: 0.5,1.4,1; viewport: 0.5;" alt="alt" src={`./images/fd2${this.state.pathLang}lev-1.png`} />
            
                <img className="big-img-2" alt="alt" src="./images/fd2/big-img-2.png" />
                <img className="dec-5" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-5.png" />
                <img className="dec-6" uk-parallax="y: 50,-150; viewport: 0.5;" alt="alt" src="./images/fd2/dec-6.png" />
            
                <img className="text-11" uk-parallax="x: 600,0; viewport: 1;" alt="alt" src={`./images/fd2${this.state.pathLang}text-11.png`} />
                <img className="text-12" uk-parallax="x: -600,0; viewport: 1;" alt="alt" src={`./images/fd2${this.state.pathLang}text-12.png`} />
                <img className="hexa-frame hexa-frame-7" alt="alt" src="./images/hexa-frame.png" />
                <img className="hexa-frame hexa-frame-8" alt="alt" src="./images/hexa-frame.png" />
                <div className="prx hexa-img-7" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-7.png)`}}></div>
                <div className="prx hexa-img-8" uk-parallax="bgy: -200;" style={{backgroundImage: `url(./images/fd2/hexa-img-8.png)`}}></div>
            </div>
        )
    }
}

export default Fd2