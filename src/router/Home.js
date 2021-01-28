import axios from "axios";
import React, { Component } from "react";

class Home extends Component {
    state = {
        isLoading: true,
        videos: [],
    };

    getVideos = async () => {
        const API_KEY = "AIzaSyCSO9IkhCXuH03IAM-e3Vzup2vgyJD76Ls";
        const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`;
        const {
            data: { items: videos },
        } = await axios.get(URL);
        this.setState({ videos, isLoading: false });
        console.log(videos);
    };
    componentDidMount() {
        this.getVideos();
    }
    render() {
        const { isLoading, videos } = this.state;
        return (
            <div className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>{" "}
                    </div>
                ) : (
                    { videos }
                )}
            </div>
        );
    }
}

export default Home;
