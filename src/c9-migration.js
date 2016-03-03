//var Radium = require('radium');
import React, { Component } from 'react';
import Radium from 'radium';
import { div, h, h1, h2, nav, ul, a, iframe, img} from 'react-hyperscript-helpers';

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
    render: function () {
        var users = ["Devin-2", "Jeremy", "Danny", "Christian"]
        var userObjectList = users.map(function (userName) {
            return React.createElement(UsersSharedVideo, {key: Math.random(), user: userName});
        });
        return (
            div('.test', {}, [
                    h1('.content-subhead', ['Now Playing']),
                    iframe('.pure-u-2-3', {
                        width: '100%',
                        height: '400px',
                        allowFullScreen: true,
                        src: 'https://www.youtube.com/embed/a2Qnh2OlND8'
                    }),
                    div('.pure-u-1-3', 'Area for information'),
                    div('#the-view', userObjectList)
                ]
            )
        );
    }
});

var UsersSharedVideo = React.createClass({
    render: function () {
        var style = {
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom: 5,
            borderStyle: "solid",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderColor: "#d0d0d0"
        };
        //return (
        //    React.createElement(
        //        'div',
        //        {style: style},
        //        React.createElement(UserRecentlySharedLabel, {user: this.props.user}),
        //        React.createElement(UserRecentlySharedVideoList, null)
        //    )
        return div('.friend-feed', [
                h1('.content-subhead', [this.props.user + ' recently shared:']),
                img('.pure-u-7-24', {src: 'http://img.youtube.com/vi/a2Qnh2OlND8/0.jpg', style: {height: '230px'}}),
                img('.pure-u-7-24', {src: 'http://img.youtube.com/vi/a2Qnh2OlND8/0.jpg', style: {height: '230px'}}),
                img('.pure-u-7-24', {src: 'http://img.youtube.com/vi/a2Qnh2OlND8/0.jpg', style: {height: '230px'}}),
                a('.pure-button .pure-u-3-24', {}, 'N')
            ]
        );
    }
});

var UserRecentlySharedLabel = React.createClass({
    render: function () {
        var style = {
            color: 'white'
        }
        return (
            React.createElement(
                'div',
                {style: style},
                this.props.user + " recently shared:"
            )
        );
    }
});

var UserRecentlySharedVideoList = React.createClass({
    render: function () {
        var style = {
            color: 'white'
        };
        var titlesAndUrl = [
            {
                title: "video1",
                url: "https://www.youtube.com/embed/oYiT-vLjhC4"
            },
            {
                title: "video2",
                url: "https://www.youtube.com/embed/oYiT-vLjhC4"
            },
            {
                title: "video3",
                url: "https://www.youtube.com/embed/oYiT-vLjhC4"
            }
        ];
        var titlesAndUrlObjectList = titlesAndUrl.map(function (titleAndUrlMap) {
            titleAndUrlMap["key"] = Math.random();
            return React.createElement(VideoWithTitle, titleAndUrlMap);
        });
        return (
            React.createElement(
                'ul',
                {style: style},
                titlesAndUrlObjectList
            )
        );
    }
})

var VideoWithTitle = React.createClass({
    render: function () {
        var style = {
            display: "inline-block",
            width: 300,
            color: 'white'
        }
        return (
            React.createElement(
                'div',
                {className: "VideoWithTitle", style: style},
                this.props.title,
                React.createElement(EmbeddedVideo, {url: this.props.url})
            )
        );
    }
})

var EmbeddedVideo = React.createClass({
    render: function () {
        return (
            React.createElement(
                'iframe',
                {src: "https://www.youtube.com/embed/oYiT-vLjhC4"}
            )
        );
    }
})

var Sidebar = React.createClass({
    render: function () {
        return (
            div('.header',
                {},
                //{className: '#layout .header'}
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