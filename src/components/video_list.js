import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    //Pass each video to VideoListItem, which wraps the video in JSX tags
    //Save to a variable
    const videoItems = props.videos.map((video) =>{        
        return (
            <VideoListItem
            onVideoSelect={props.onVideoSelect} 
            key={video.etag} 
            video={video} />
        );
    });



    return(

        //Reference the JavaScript object inside the unordered list
        //React is able to display these arrays
        <ul className="col-md-4 list-group">                
        {videoItems}        
        </ul>
    );
}

export default VideoList;