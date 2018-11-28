import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import { Provider } from 'mobx-react/native'
import { MemoryRouter as Router, Route } from 'react-router';
import store from './store/store'
import HomeScreen from './components/HomeScreen/HomeScreen'
import LeftPanel from './components/LeftPanel/LeftPanel'
import RightPanel from './components/RightPanel/RightPanel'
import DestinationScreen from './components/DestinationScreen/DestinationScreen'
import ResortScreen from './components/ResortsScreen/ResortsScreen'

class App extends React.Component {

  render() {
    console.log(this.props);
    return (
      <Router>
        <Provider store={store}>
          <View>
            <Route exact path='/' render={props => <HomeScreen {...this.props} {...props} />}/>
            <Route path='/destinations/:id' component={DestinationScreen}/>
            <Route path='/rooms/:id' component={ResortScreen}/>
          </View>          
        </Provider>
      </Router>
    )
  }
}

AppRegistry.registerComponent('App', (props) => App);
AppRegistry.registerComponent('RightPanel', (props) => RightPanel);