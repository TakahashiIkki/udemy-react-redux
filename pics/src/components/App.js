import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import UNSPLASH_ACCESS_KEY from "./Conf";

class App extends React.Component {
    state = {images: []}

    onSearchSubmit = async (term) => {
        const key = UNSPLASH_ACCESS_KEY;
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID ' + key
            }
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>

                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;