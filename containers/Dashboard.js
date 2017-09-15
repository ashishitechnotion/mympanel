/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Dashboard
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
//import Profile from '../components/widgets/Profile';

import { selectApp, logout } from '../actions';
import EasyPie from '../components/charts/EasyPie';

//import ReduxOutlet from '../outlets/ReduxOutlet';
//import moment from 'moment';
//import ModalFactory from '../components/modals/factory';

//let Factory = ModalFactory.modalFromFactory;

//import LineChart from '../components/charts/LineChart';
//import EasyPie from '../components/charts/EasyPie';
//import ProgressBar from '../components/charts/ProgressBar';


 import {I, Panel, Button} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

 var shallowCompare = require('react-addons-shallow-compare');

class Dashboard extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { dispatch } = this.props;
    let i = 0;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel classes={'no-padder'}>
            <div className="col-md-4 summaryItem">
                <h1 style={{color:'#28dbec'}}>85</h1>
                <p>Total Question</p>
              </div>

              <div className="col-md-4 summaryItem">
                <h1 style={{color:'#28dbec'}}>565</h1>
                <p>Total Audit</p>
              </div>

              <div className="col-md-4 summaryItem">
                <h1 style={{color:'#28dbec'}}>112</h1>
                <p>Total Staff</p>
              </div>


           
        
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={4}>
            <Panel classes={'text-center'}>
              <EasyPie 
                  size={150}
                  barColor={'#F06292'}
                  trackColor={'rgba(0,0,0,0.1)'}
                  lineWidth={5}
                  percent={30}
                  theme="honeycomb_light"
                />
              <h4 className="m-b-none">Proposals</h4>
              <small>Total proposals</small>
            </Panel>
          </Col>
          <Col size={4}>
            <Panel classes={'text-center'}>
              <EasyPie 
                  size={150}
                  barColor={'#3949AB'}
                  trackColor={'rgba(0,0,0,0.1)'}
                  lineWidth={5}
                  percent={80}
                  theme="honeycomb_light"
                />
              <h4 className="m-b-none">Reports</h4>
              <small>Total reports</small>
            </Panel>
          </Col>
          <Col size={4}>
            <Panel classes={'text-center'}>
              <EasyPie 
                  size={150}
                  barColor={'#F4511E'}
                  trackColor={'rgba(0,0,0,0.1)'}
                  lineWidth={5}
                  percent={70}
                  theme="honeycomb_light"
                />
              <h4 className="m-b-none">Sales</h4>
              <small>Total Sales</small>
            </Panel>
          </Col>
        </Row>

    </Page>
		);
	}
}


function mapStateToProps(state) {
  return {
    token: state.app.token,
    user: state.user,
    app:state.app
  };
}

export default connect(mapStateToProps)(Dashboard);

