import React from 'react';

//{video} in the arguement gets resolved as props.video.
//it is similar to creatring a const video=props.videoas in VideoListItem component.
const VideoDetail = ({video}) => {
  //make a check if video is available. or else will throw error.
  //Because React tries to render the child component even if the data is not eyt available to parent.
  //since initially videos[] is empty in index.js for few secs before fetching the data from YT api it will return undefined.
  if(!video) {
    return <div>Loading...</div>  
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
    {/* embed-responsive is a bootstrap class used to create responsive videos and slideshow, 16by9 is the aspect-ratio */}
      <div className="embed-responsive embed-responsive-16by9">
        {/*iframe is used inside embed-responsive parent class to hold the video or content.*/}
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
