var SingleVideoInList = React.createClass({
  render: function() {
    var style = {
      color: 'white',
      fontSize: 200
    };

    return (
      <div>
        {/* Hello world */}
        <div className="col-md-4 resent-grid recommended-grid slider-top-grids">
          <div className="resent-grid-img recommended-grid-img">
            <a href="single.html"><img src="images/t1.jpg" alt /></a>
            <div className="time">
              <p>3:04</p>
            </div>
            <div className="clck">
              <span className="glyphicon glyphicon-time" aria-hidden="true" />
            </div>
          </div>
          <div className="resent-grid-info recommended-grid-info">
            <h3><a href="single.html" className="title title-info">Pellentesque vitae pulvinar tortor nullam interdum metus a imperdiet</a></h3>
            <ul>
              <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
              <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
            </ul>
          </div>
        </div>
        <p>Enter your HTML here</p>
      </div>
    );
  }
});

ReactDOM.render(
<SingleVideoInList/>,
document.getElementById('content')
);