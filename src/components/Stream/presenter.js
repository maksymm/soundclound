import React from 'react';

//tracks.filter( (track) => track && track.origin )

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
        tracks.map((track, key) => {
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
