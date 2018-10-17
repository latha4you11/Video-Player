import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //etag is a property returned by the youtube API which is unique to each video(like an id).
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />);
  });
  return (
    <div>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;
