import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  Animated,
  asset,
  Environment,
  NativeModules,
} from 'react-360'
import {observer} from 'mobx-react/native'
import {toJS} from 'mobx'
import store from '../../store/store'
import DestinationLiftup from '../HomeScreen/DestinationLiftup'


const rooms = [
  {id: '1-1', name: "Standart suite", photo: "room360-1.jpg", startingPrice: '800$'},
  {id: '1-2', name: "Single room", photo: "room360-2.jpg", startingPrice: '1200$'},
  {id: '1-3', name: "Double room", photo: "room360-3.jpg", startingPrice: '900$'},
]

class ResortsScreen extends React.Component {
  state = {
    selectedRoom: undefined
  }
  componentWillMount() {
    const destinationId = this.props.match.params.id
    this.getRoom(destinationId)
  }

  getRoom(destinationId) {
    const selectedRoom = rooms.find((room) => {
      return room.id === destinationId
    })
    
    this.setState({selectedRoom})
  }

  componentDidMount() {
    const {selectedRoom} = this.state
    Environment.setBackgroundImage(asset(selectedRoom.photo));
  }

  goBack() {
    const {history} = this.props
    console.log(this.props)
    store.updateNavigationHistory({
      roomDescription: undefined
    })
    history.goBack()
  }

  render() {
    
    const {selectedRoom} = this.state
    
    return (
      <View stlye={styles.container}>
        <VrButton onClick={() => this.goBack()} style={styles.goBack}>
          <Text style={styles.buttonText}>
            {`<`}
          </Text>            
        </VrButton>
        <Text style={styles.title}>
          {selectedRoom.name}
        </Text>     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 80,
    fontWeight: '700',
    color: 'black',
  },
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 1000,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: 40,
  },
  goBack: {
    backgroundColor: 'white',
    width: 64,
    height: 64,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 40, 
    color: 'black', 
    fontWeight: '700',
    textAlign: 'center'
  }
});

export default (observer(ResortsScreen))