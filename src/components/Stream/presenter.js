import React from 'react';

function Stream({ user, tracks = [], onAuth }) {
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
        tracks.filter( (track) => track && track.origin )
        .map((track, key) => {
          console.log("track.origin.title is: ", track.origin.title);
          console.log("key is key", key);
            return <div className="track" key={key}>{track.origin.title}</div>;
        })
      }
    </div>
  </div>
  );
}

export default Stream;
