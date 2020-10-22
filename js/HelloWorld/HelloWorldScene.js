'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  Viro360Video
} from 'react-viro';

var createReactClass = require('create-react-class');

var HelloWorldScene = createReactClass({
  getInitialState() {
    return {

    };
  },
  render: function() {
    return (
     <ViroScene>
       <Viro360Video source={require('./../Portals/portal_res/360_surf.mp4')} loop={true} />
      {/* <Viro360Image source={require('./res/guadalupe_360.jpg')} /> */}
     </ViroScene>
    );
  },
});


module.exports = HelloWorldScene;
