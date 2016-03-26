/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'
import Sidebar from './Sidebar'

class App extends React.Component {
  render() {
    return (
      <div id="layout" class="pure-g">
        <Sidebar />
        <GlobalNav />
        <div style={{ padding: 200 }}>
          {this.props.children || <Dashboard courses={COURSES} /> }
        </div>
      </div>
    )
  }
}

module.exports = App
