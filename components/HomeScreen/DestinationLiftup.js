import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  Animated,
  asset
} from 'react-360';
import {observer} from 'mobx-react/native'
import store from '../../store/store'

class DestinationLiftup extends React.Component {
  state = {
    z: 0,
  }

  componentWillMount() {
    this.slideValue = new Animated.Value(1)
    this.zIndex = new Animated.Value(1)
  }

  _onEnter = () => {
    Animated.parallel([
      Animated.spring(this.slideValue, {
        delay: 100,
        toValue: 1.3,
        friction: 10,
      })
    ]).start()
  }

  _onExit = () => {
    Animated.spring(this.slideValue, {
      toValue: 1,
      friction: 5,
      tension: 40,
    }).start()
  }


  render() {
    const scale = {transform: [{scale: this.slideValue}] }
    const {destination, onClick} = this.props
    
    return (
      <Animated.View 
        style={[scale, styles.container]}
        onEnter={() => this._onEnter()}
        onExit={() => this._onExit()} 
      >
        <VrButton 
          style={styles.destination}
          onClick={() => onClick(destination)}
        >
          <Text style={[styles.text, {fontSize: 30}]}>{destination.name}</Text>
          <Image style={styles.img} source={asset(`${destination.photo}`)} />     
          <Text style={styles.text}>from {destination.startingPrice}</Text>
        </VrButton>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 250,
    height: 260,
    overflow: 'hidden',
    marginBottom: 20,
  },
  destination: {
    padding: 5,
    marginBottom: 20,
  },
  img: {
    width: 240,
    height: 180,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  }
})

export default observer(DestinationLiftup)