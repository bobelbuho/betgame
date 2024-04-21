import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <header>
            <div className="top-nav">
                <div className="top-nav">
                    <div className="container flex">
                        <div className="burger">

                        </div>
                        <div className='left-nav flex'>
                            <div className="flex desk-top">
                                <h1>1XWIN</h1>
                                <h3>Betting ap</h3>
                                <p>
                                    This app will make pre-match 
                                    and in-play betting faster and save mobile data.
                                </p>
                            </div>

                            <div className="flex mobile">
                                <h3>1XWIN</h3>
                                <div className="bet-app">
                                    <h3>Smartphone</h3>
                                    <p>
                                    This app will make pre-match 
                                    and in-play betting faster and save mobile data.
                                </p> 
                                </div>
                               
                            </div>

                            <div className="flex telg">
                                <h3>Bets</h3>
                                <div className="telg-box">
                                    <h3>Bets</h3>
                                    <h3>via telegram</h3>
                                </div>
                            </div>

                            <div className="flex" title='Payments'>

                            </div>
                            <div className="flex" title='Bonus'>
                                <span>4000€</span>
                                <i>BONUS</i>
                            </div>
                        </div>
                        <div className="burger"></div>
                        <div className="right-nav flex"></div>
                    </div>
                </div>
            </div>
            <div className="main-head">

            </div>
        </header>
    </div>
  )
}

export default Hero