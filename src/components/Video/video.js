import React from 'react';
import video from './video.mp4';
import './video.css';

function Video() {
  return (
    <section className="video" id="blog"> 
      <h2>Video Tour</h2>
      <div>
        <video src={video} autoPlay loop muted height="450px" width="50%"></video> 
      </div>
    </section>
  );
}

export default Video;
