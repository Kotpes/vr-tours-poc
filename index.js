import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import { MemoryRouter as Router, Route } from 'react-router';

import HomeScreen from './components/HomeScreen/HomeScreen'
import TestComp from './components/TestComp'
import DestinationScreen from './components/DestinationScreen/DestinationScreen'

class App extends React.Component {

  render() {
    return (
      <Router>
        <View>
          <Route exact path='/' render={props => <HomeScreen {...this.props} {...props} />}/>
          <Route path='/destinations/:id' component={DestinationScreen}/>
        </View>
      </Router>
    )
  }
  
}


AppRegistry.registerComponent('App', (props) => App);

