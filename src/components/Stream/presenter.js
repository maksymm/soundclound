import React from 'react';
import { CLIENT_ID } from '../../constants/auth';

//tracks.filter( (track) => track && track.origin )
//return <div className="track" key={key}>{track.origin.title}</div>;
function Stream({ user, tracks = [], activeTrack, onAuth, onPlay }) {
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

export default Stream;
