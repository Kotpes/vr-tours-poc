import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
} from 'react-360';
import {observer} from 'mobx-react/native'

class LeftPanel extends React.Component {
  render() {    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is left panel</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  title: {
    color: 'white',
    fontSize: 40,
  }
})

export default observer(LeftPanel)