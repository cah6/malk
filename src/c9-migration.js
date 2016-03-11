//var Radium = require('radium');
import React, { Component } from 'react';
import Radium from 'radium';
import { div, h, h1, h2, nav, ul, a, iframe, img} from 'react-hyperscript-helpers';
//import ReactFireMixin from 'reactfire';
//import Firebase from 'firebase';

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
    render: function () {
        var userObjectList = this.state.videos.map(function (videos) {
            return React.createElement(UsersSharedVideo, {videos: videos, userId: videos['.key']});
        });
        return (
            div('.test', {}, [
                    h1('.content-subhead', ['Now Playing']),
                    iframe('.pure-u-2-3', {
                        width: '100%',
                        height: '400px',
                        allowFullScreen: true,
                        src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/242635562&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
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
    componentWillMount: function () {
        var ref = new Firebase('https://incandescent-heat-7098.firebaseio.com/users/' + this.props.userId);
        this.bindAsArray(ref, 'userInfo');
    },
    render: function () {
        var userName = this.state.userInfo.map(function (info) {
                console.dir(info['.value']);
                return info['.key']
            }
        )
        return div('.friend-feed', [
                h1('.content-subhead', [userName + ' recently shared:']),
                h(UserRecentlySharedVideoList, {videos: this.props.videos}),
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
                    h(EmbeddedVideo, {url: "http://img.youtube.com/vi/" + this.props.id + "/0.jpg"})
                ]
            )
        );
    }
})

var EmbeddedVideo = React.createClass({
    render: function () {
        return (
            img(
                {src: this.props.url, height: '200px'}
            )
        );
    }
})

var Sidebar = React.createClass({
    render: function () {
        return (
            div('.header',
                [
                    h1('.brand-title', ['Malk']),
                    h2('.brand-tagline', ['Subtext']),
                    nav('.nav', [
                        ul('.nav-list', [
                            a('.pure-button', {href: '/'}, 'Login')
                        ])
                    ])
                ]
            )
        );
    }
});