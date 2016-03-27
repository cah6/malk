import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
          <LinkContainer to={{ pathname: '/' }}>
            <a>MALk</a>
          </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{ pathname: '/calendar' }}>
              <NavItem eventKey={1}>calendar</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/grades' }}>
              <NavItem eventKey={2}>grades</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/messages' }}>
              <NavItem eventKey={3}>messages</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/profile' }}>
              <NavItem eventKey={5}>{user.name}</NavItem>
            </LinkContainer>
            <Button onClick={this.logOut}>log out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Ryan Florence'
  }
}

export default GlobalNav
