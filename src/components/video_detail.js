import React from 'react';

const VideoDetail = ({video}) =>{
    //If video doesn't exist, that means the parent class didn't return the api call fast enough
    //Add this check to handle it and return. When the video has loaded in the parent class
    //It will change the state causing every thing to reload
    if(!video){
        //Replace with ajax spinner
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail cold-md-8">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe> 
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;