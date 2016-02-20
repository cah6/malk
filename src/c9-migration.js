//var Radium = require('radium');
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		var style = {
			backgroundColor: 'black'
		};
		return React.createElement(
			'div',
			{},
			React.createElement(Sidebar, null),
			React.createElement(ContentFrame, null)
		);
	}
}

//var MainContainer = React.createClass({
//	render: function() {
//		var style = {
//			backgroundColor: 'black'
//		};
//		return React.createElement(
//			'div',
//			{},
//			React.createElement(Sidebar, null),
//			React.createElement(ContentFrame, null)
//			);
//	}
//});

var ContentFrame = React.createClass({
	render: function() {
	  	var style = {
	  		display: "inline-block",
	  		leftPadding: "20%",
	  		width: "80%",
	  		backgroundColor: 'black'
	  	};
	  	var users = ["Devin", "Jeremy", "Danny", "Christian"]
	  	var userObjectList = users.map(function(userName) {
		  	return React.createElement(UsersSharedVideo, {key: Math.random(), user: userName});
		});
	  	return (
	  		React.createElement(
	  			'div',
	  			{className: "ContentFrame", style: style},
	  			userObjectList
	  			)
	    	);
		}
});

var UsersSharedVideo = React.createClass({
	render: function() {
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
	  	return (
	  		React.createElement(
	  			'div',
	  			{style: style},
	  			React.createElement(UserRecentlySharedLabel, {user: this.props.user}),
	  			React.createElement(UserRecentlySharedVideoList, null)
	  			)
	    	);
		}
});

var UserRecentlySharedLabel = React.createClass({
	render: function() {
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
	render: function() {
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
		var titlesAndUrlObjectList = titlesAndUrl.map(function(titleAndUrlMap) {
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
	render: function() {
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
	render: function() {
	  	return (
	  		React.createElement(
	  			'iframe',
	  			{src: "https://www.youtube.com/embed/oYiT-vLjhC4"}
	  			)
	    	);
		}
})

var Sidebar = React.createClass({

  // using javascript
  render: function() {
  	var style = {
  		verticalAlign: "top",
  		display: "inline-block",
  		width: "20%",
  		backgroundColor: 'black'
  	};
  	return (
  		React.createElement(
  			'div',
  			{style: style},
  			React.createElement(SidebarLink, {text: "Browse"}),
  			React.createElement(SidebarLink, {text: "Guide"}),
  			React.createElement(SidebarLink, {text: "Activity"})
  			)
    	);
	}
});

class SidebarLink extends React.Component {
	render() {
		var style = {
			display: "block",
    		color: 'white',
    		textIndent: 20,
    		lineHeight: "40px",
    		backgroundColor: 'black',
    		':hover': {
      			backgroundColor: 'red'
    		}
		};
   		return React.createElement(
      		'div',
      		{style: style},
      		this.props.text
    	);
  	}
}
//SidebarLink = Radium(SidebarLink);