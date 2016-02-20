var Radium = require('radium');

var Sidebar = React.createClass({

  // using javascript
  render: function() {
  	return (
  		React.createElement(
  			'div',
  			{},
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
		    width: 250,
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
  React.createElement(Sidebar, null),
  document.getElementById('content')
);