import React, { Component } from 'react';
import './YoutubeGallery.css';

function SelectShowLogo (props) {
    const shows = ['This is LA', 'This is SF', 'This is SD', 'The Recruit']
    return (
        <ul className="showList">
            {shows.map((show) => {
                return (
                    <li
                        style={show === props.selectedShow ? {color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, show)}
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
        
     render() {

        return (
            <section className='hero is-medium youtubeHero' style={{backgroundColor: '#f0f2f2'}}>
                <div className="hero-body">
                    <div class="container">
                        <SelectShowLogo 
                            selectedShow={this.state.selectedShow}
                            onSelect={this.updateShow}
                        />
                    </div>
                </div>
            </section>
        )
     }
 }

export default YoutubeGallery;