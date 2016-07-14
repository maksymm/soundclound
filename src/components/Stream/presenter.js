import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';

//tracks.filter( (track) => track && track.origin )
//return <div className="track" key={key}>{track.origin.title}</div>;
class Stream extends Component {
  componentDidUpdate() {
    const audioElement = this.refs.audio;

    if (!audioElement) { return; }
    console.log("audioElement: ", audioElement);
    const { activeTrack } = this.props;
    console.log("activeTrack: ", activeTrack);
    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const { user, tracks = [], activeTrack, onAuth, onPlay, onPause } = this.props;

//function Stream({ user, tracks = [], activeTrack, onAuth, onPlay }) {
  return (
    <div>
      <div>
        {
          user ?
            <div>{user.username}</div> :
            <button onClick={onAuth} type="button">Login</button>
        }
      </div>
      <br />
      <div>
      {
        tracks.map((track, key) => {
          console.log("track.origin.title is: ", track.origin.title);
          return (
            <div className="track" key={key}>
              {track.origin.title}
              <button type="button" onClick={() => onPlay(track)}>Play</button>
              <button type="button" onClick={() => onPause(track)}>Pause</button>
            </div>
          );
        })
      }
    </div>
    {
      activeTrack ?
        <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
        null
    }
  </div>
  );
}
}
export default Stream;
