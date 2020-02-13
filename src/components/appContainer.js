import React from 'react';
import network from "../networking/network";
import App from "./App";

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: [], limit: 10, offset: 0};
    }

    async componentDidMount() {
        const rs = await network.getAllPosts({limit: this.state.limit, offset: this.state.offset});
        this.setState({posts: [...rs]});
        document.addEventListener('scroll', this.handleScroll)
    };

    async componentDidUpdate(prevProps, prevState, snapshot) {
        const rs = await network.getAllPosts({limit: this.state.limit, offset: this.state.offset});
        const {offset: prevOffset} = prevState;
        const {offset} = this.state;
        if (prevOffset !== offset) {
            this.setState((prevState) => ({...prevState, posts: [...prevState.posts, ...rs]}));
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    onSave = async (value) => {
        const rs = await network.createPost({post_body: value.post_body, post_title: value.post_title});
        this.setState((prevState) => ({posts: [rs, ...prevState.posts]}));
    };

    handleScroll = async (event) => {
        const bottom = event.target.documentElement.scrollHeight - event.target.documentElement.scrollTop === event.target.documentElement.clientHeight;
        if (bottom) {
            this.setState({offset: this.state.offset + 10})
        }
    };

    render() {
        return <App {...{onSave: this.onSave, posts: this.state.posts}} />
    }

}