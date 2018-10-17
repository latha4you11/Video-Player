import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Youtube API key
const API_KEY = 'AIzaSyAfDIxgOu50tev9SBUjBkRBmZ4Ilr5JvaM';

//Create a new Component. This component should produce 
//some HTML

//Components are JS functions that ultimately produce HTML 

//ES6 syntax for function. Use fat arrow.

//App is the parent-most component.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //gets resolved as this.setState({ videos: videos })
            //this is the condensed es6 syntax since the key and the value variable names are the same.
        });
    }

    render() {
        //The _ is a varibale refering to the lodash.
        //debounce func of lodash is used to control how many times a func can be executed over time.
        //It creates a layer of control between the event ans the execution of func. we cant cntrl the no of times the DOM events emit so we cntrl the no of times the func executes and affetcs the DOM.
        //The Debounce technique allow us to "group" multiple sequential calls in a single one.
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                {/* Here we are calling the debounced version of the viedoSearch func which is stored in the videoSearch constant */}
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                {/*onVideoSelect here is a callback function that gets called from the VideoList component*/}                
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} //resolves to this.setState({selectedVideo: selectedVideo})
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

//Take this component's generated HTML and put it
//on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
