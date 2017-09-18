/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Profile
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Profile extends Component {
	render() {
		return (
			<li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <span className="thumb-sm avatar pull-left">
            <img src=""/>      
          </span>
          <b className="caret"></b>
        </a>
        <ul className="dropdown-menu animated fadeInRight">
          <span className="arrow top"></span>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
          <li className="/"></li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </li>
		);
	}
}
