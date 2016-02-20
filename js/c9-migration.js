var Radium = require('radium');

var MainContainer = React.createClass({
	render: function() {
		var style = {
			backgroundColor: 'black'
		};
		return React.createElement(
			'div',
			{},
			React.createElement(Sidebar, null),
			React.createElement(VideoFrame, null)
			);
	}
});

var VideoFrame = React.createClass({
	render: function() {
	  	var style = {
	  		display: "inline-block",
	  		leftPadding: "20%",
	  		width: "80%",
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

var UsersSharedVideo = React.createClass({
	render: function() {
	  	var style = {
	  		display: "inline-block",
	  		leftPadding: "20%",
	  		width: "80%",
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

var Sidebar = React.createClass({

  // using javascript
  render: function() {
  	var style = {
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
	// using JSX
 //    return (
 //    	<div>
 //      		<SidebarLink text="Browse"/>
 //      		<SidebarLink text="Guide"/>
 //      		<SidebarLink text="Activity"/>ra
 //    	</div>
 //    	);
	// }
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
SidebarLink = Radium(SidebarLink);

ReactDOM.render(
  React.createElement(MainContainer, null),
  document.getElementById('content')
);