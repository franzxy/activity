import React from 'react';

const Landing = () => {
  
  return (
    <div className="landing">
      <video className="time-video" controls autoPlay loop muted>
        <source src="/time.mp4" type="audio/ogg" />
        Your browser does not support the audio element.
      </video>
    </div>
  )
};

export default Landing;