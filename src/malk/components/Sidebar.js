import React from 'react';
import { Link } from 'react-router'


class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar pure-u-1 pure-u-md-1-6">
                <div className="header">
                    <h1 className="brand-title">Malk</h1>
                    <h2 className="brand-tagline">Subsext</h2>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a className="pure-button" href="http://purecss.io">Pure</a>
                            </li>
                            <li className="nav-item">
                                <a className="pure-button" href="http://yuilibrary.com">YUI Library</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Sidebar
