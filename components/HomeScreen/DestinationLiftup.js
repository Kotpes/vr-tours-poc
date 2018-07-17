import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  Animated,
} from 'react-360';

class DestinationLiftup extends React.Component {
  state = {
    zIndex: 1,
  }

  componentWillMount() {
    this.slideValue = new Animated.Value(1)
  }

  _onEnter = () => {
    Animated.spring(this.slideValue, {
      delay: 100,
      toValue: 1.3,
      friction: 10,
    }).start()
    this.setState({zIndex: 100})
  }

  _onExit = () => {
    Animated.spring(this.slideValue, {
      toValue: 1,
      friction: 5,
      tension: 40,
    }).start()
    this.setState({zIndex: 1})
  }


  render() {
    const scale = {transform: [{scale: this.slideValue}], zIndex: this.state.zIndex }
    const {destination, onClick} = this.props
    
    return (
      <Animated.View 
        style={scale}
        onEnter={() => this._onEnter()}
        onExit={() => this._onExit()} 
      >
        <VrButton 
          style={styles.destination}
          onClick={() => onClick(destination.id)}
        >
          <Text style={[styles.text, {fontSize: 30}]}>{destination.name}</Text>
          <Image style={styles.img} source={{uri: `${destination.photo}`}} />     
          <Text style={styles.text}>from {destination.startingPrice}</Text>
        </VrButton>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  destination: {
    padding: 5,
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 120,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  }
})

export default DestinationLiftup