//var Radium = require('radium');
import React, { Component } from 'react';
import Radium from 'radium';
import { div, h, h1, h2, nav, ul, a, iframe, img} from 'react-hyperscript-helpers';
// import ReactFireMixin from 'reactfire';
// import Firebase from 'firebase';
import Sidebar from './sidebar.js'

const firebaseServerRoot = "https://incandescent-heat-7098.firebaseio.com/"

export default class App extends Component {
    render() {
        return div('#layout .pure-g', {}, [
                div('.sidebar .pure-u-md-1-5', {}, h(Sidebar)),
                div('.content .pure-u-md-4-5', {}, h(ContentFrame))
            ]
        );
    }
}

var ContentFrame = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function () {
        var ref = new Firebase('https://incandescent-heat-7098.firebaseio.com/videos/');
        this.bindAsArray(ref, 'videos');
    },
    getInitialState: function() {
        return {
            src: "http://www.youtube.com/embed/1RZkIPlUosE"
        }
    },
    render: function () {
        var userObjectList = this.state.videos.map(function (videos) {
            return React.createElement(UsersSharedVideo, {
                videos: videos,
                userId: videos['.key'],
            });
        });
        return (
            div('.test', {}, [
                    h1('.content-subhead', ['Now Playing']),
                    iframe('.pure-u-2-3', {
                        id: 'main-video',
                        width: '100%',
                        height: '400px',
                        allowFullScreen: true,
                        src: this.state.src
                    }),
                    div('.pure-u-1-3', 'Area for information'),
                    div('#the-view', userObjectList)
                ]
            )
        );
    }
});

var UsersSharedVideo = React.createClass({
    mixins: [ReactFireMixin],
    //getInitialState: function() {
    //    return {userInfo: "hello"};
    //},
    componentWillMount: function () {
        var ref = new Firebase('https://incandescent-heat-7098.firebaseio.com/users/' + this.props.userId);
        this.bindAsObject(ref, "userInfo");
    },
    render: function () {
        var userName;
        if (this.state === null) {
            userName = "placeholder value"
        } else {
            userName = this.state.userInfo['name'];
        }
        return div('.friend-feed', [
                h1('.content-subhead', [userName + ' recently shared:']),
                h(UserRecentlySharedVideoList, {
                    videos: this.props.videos,
                }),
            ]
        );
    }
});

var UserRecentlySharedVideoList = React.createClass({
    render: function () {
        var titlesAndUrlObjectList = this.props.videos.map(function (video) {
            return h(VideoWithTitle, video);
        });
        return (
            div(
                [
                    titlesAndUrlObjectList,
                    a('.pure-button .pure-u-3-24', {}, ['N'])
                ]
            )
        );
    }
})

var VideoWithTitle = React.createClass({
    render: function () {
        return (
            div('.pure-u-7-24 videoWithTitle',
                [
                    this.props.title,
                    h(EmbeddedVideo, {id: this.props.id})
                ]
            )
        );
    }
})

var EmbeddedVideo = React.createClass({
    handleClick: function () {
        const videoUrl = "http://www.youtube.com/embed/" + this.props.id + "?autoplay=1"
        console.log("My iframe: " + document.getElementById('main-video'))
        document.getElementById('main-video').src = videoUrl
    },
    render: function () {
        return (
            img(
                {src: "http://img.youtube.com/vi/" + this.props.id + "/0.jpg", height: '200px', onClick: this.handleClick}
            )
        );
    }
})
