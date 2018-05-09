//Imported Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Imported user defined components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

//API Key that allows you to make request from YouTube
const API_KEY = '***';

//Create a new componet that produces HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        //Immediately kick off search to populate site when the the user loads the page
        //Selected the first video in the list to display
        YTSearch({key: API_KEY, term: 'overwatch'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }
    render(){
        return ( 
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div> 
        );
    }  
}

//Take this componet generated HTML and put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
