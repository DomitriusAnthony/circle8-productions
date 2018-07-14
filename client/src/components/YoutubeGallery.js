import React, { Component } from 'react';
import './YoutubeGallery.css';

const ThisIsLaYoutube = [
    'https://www.youtube.com/embed/eAyhU1w9fqc',
    'https://www.youtube.com/embed//QBQdwXewDy8',
    'https://www.youtube.com/embed/wlwWD_--cH0',
    'https://www.youtube.com/embed/V8Ro0QQoPs0',
]

const ThisIsSFYoutube = [
    'https://www.youtube.com/embed/pzmDZA13nhQ',
    'https://www.youtube.com/embed/7aXGA15v22Y',
    'https://www.youtube.com/embed/7-ubWAyu14E',
    'https://www.youtube.com/embed/kUglJRjItSg',
]

const SelectShowLogo = ({ selectedShow, onSelect }) => {
    const shows = ['This is LA', 'This is SF', 'This is SD', 'This is Denver', 'The Recruit']
    return (
        <ul className="showList">
            {shows.map((show) => {
                return (
                    <li
                        style={show === selectedShow ? {color: '#d0021b'} : null}
                        onClick={onSelect.bind(null, show)}
                        key={show}
                        className="showListItem is-size-2"
                    >
                        {show}
                        <br/>
                        <span class="icon has" style={{marginLeft: '80px'}}>
                            <i class="fab fa-youtube"></i>
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}

 class YoutubeGallery extends Component {
     constructor(props) {
        super()
        this.state = {
            selectedShow: 'This is LA'
        }

        this.updateShow = this.updateShow.bind(this);
     }

    componentDidMount() {
        this.updateShow(this.state.selectedShow)
    }

     updateShow(show) {
        this.setState(() => {
            return {
                selectedShow: show
            }
        })
     }

     youtubeGallerySelector() {
        switch(this.state.selectedShow) {
            case 'This is LA':
                return (
                    <div className="container is-fluid">
                        <div className="columns is-centered">
                            {ThisIsLaYoutube.map((showURL) => {
                                return (
                                    <div className="column">
                                        <iframe width="300" height="200"
                                        src={showURL}>
                                        </iframe>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="is-size-2 has-text-centered"><a href="https://www.youtube.com/channel/UCv1Zi0LpVTK3J76iAkviEdw">See more here!</a></p>
                    </div>
                )
            case 'This is SF':
                return (
                    <div className="container is-fluid">
                        <div className="columns is-centered">
                            {ThisIsSFYoutube.map((showURL) => {
                                return (
                                    <div className="column">
                                        <iframe width="300" height="200"
                                        src={showURL}>
                                        </iframe>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="is-size-2 has-text-centered"><a href="https://www.youtube.com/channel/UCs_MV-g1Waq9zQKWB4R8m7w">See more here!</a></p>
                    </div>
                )
            case 'This is SD':
                return (
                    <div className="columns">
                        <div className="column is-centered">
                            <p className="is-size-1 has-text-centered">Videos coming soon!</p>
                        </div>
                    </div>
                )
            case 'This is Denver':
                return (
                    <div className="columns">
                        <div className="column is-centered">
                            <p className="is-size-1 has-text-centered">Videos coming soon!</p>
                        </div>
                    </div>
                )
            case 'The Recruit':
                return (
                    <div className="columns">
                        <div className="column is-centered">
                            <p className="is-size-1 has-text-centered">Videos coming soon!</p>
                        </div>
                    </div>
                )
        }
     }
        
     render() {

        return (
            <section className='hero is-medium' style={{backgroundColor: '#f0f2f2'}}>
                <div className="hero-body">
                    <div class="container is-fluid">
                        <SelectShowLogo 
                            selectedShow={this.state.selectedShow}
                            onSelect={this.updateShow}
                        />
                        {this.youtubeGallerySelector(this.state.selectedShow)}
                    </div>
                </div>
            </section>
        )
     }
 }

export default YoutubeGallery;