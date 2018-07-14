import React, { Component } from 'react';
import './VideoBackground.css';

class VideoBackground extends Component {
    render() {
        return (
            <div className="sizzleDiv">
                <div className="sizzleContainer">
                    <video autoPlay muted loop className="sizzle">
                        <source src="./videos/sizzle.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="sizzleOverlay">
                    <div className="sizzleContent">
                        <div className="columns">
                            <div className="column is-centered">
                                <div className="circle8Logo container"></div>
                                <hr /> 
                                <div className="textContainer">
                                    <p className="sizzleText is-size-3 has-text-white">Bridging the gap between social media influences and major television platforms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoBackground;
