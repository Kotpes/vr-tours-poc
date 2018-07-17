import React, { Component } from 'react';
import {
  View, Text,AppRegistry
} from 'react-360';

class TestComp extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text> Here we go! {this.props.match.params.id} </Text>
      </View>
    );
  }
}

export default TestComp;