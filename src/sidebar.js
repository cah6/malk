import React, { Component } from 'react';
import { div, h1, h2, nav, ul, a} from 'react-hyperscript-helpers';

export default class Sidebar extends Component {
    render() {
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
}