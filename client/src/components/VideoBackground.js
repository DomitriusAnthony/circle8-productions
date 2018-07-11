import React, { Component } from 'react';
import './VideoBackground.css';

class VideoBackground extends Component {
    render() {
        return (
            <div className="sizzleDiv">
                <video autoPlay muted loop className="sizzle">
                    <source src="./videos/sizzle.mp4" type="video/mp4" />
                </video>

                <div className="sizzleContent">
                    <div className="columns is-mobile">
                        <div className="column is-centered">
                            <div className="circle8Logo container"></div>
                        </div>
                    </div>
                    <div className="columns hero-text">
                        <div className="column container has-text-centered">
                            <p className="has-text-white is-size-2">
                                Bridging the gap between social media influences and major television platforms
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoBackground;
