import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import YouTube from 'react-youtube';

class Youtube extends React.Component {
    render() {
        const opts = {
            height: '600',
            width: '900',
            autoplay: 1
            }
          
        return (
            <YouTube
            videoId="2t5JGQXCTe3c"
            opts={opts}
            onReady={this._onReady}
          />
        );
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    }
export default Youtube;

