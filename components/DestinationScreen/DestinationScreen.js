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


const destinationsWithLocations = [
  {
    id: 1, 
    title: "South Africa",
    background: "africa360.jpg",
    locations: [
      {id: '1-1', name: "Crawford's Beach", photo: "sa_resort.jpg", startingPrice: '800$'},
      {id: '1-2', name: "Peermont Mondior", photo: "sa_resort2.jpg", startingPrice: '1200$'},
      {id: '1-3', name: "Protea Hotel", photo: "sa_resort3.jpg", startingPrice: '900$'},
      {id: '1-4', name: "The Kingdom", photo: "sa_resort4.jpg", startingPrice: '1100$'},
      {id: '1-5', name: "Monkey Valley", photo: "sa_resort5.jpg", startingPrice: '1250$'},
    ]
  },
  {
    id: 2, 
    title: "Spain", 
    background: "spain360.jpg",
    locations: [
      {id: '1-1', name: "Iberostar Playa", photo: "sa_resort.jpg", startingPrice: '600$'},
      {id: '1-2', name: "Iberostar Albufera", photo: "sa_resort3.jpg", startingPrice: '450$'},
      {id: '1-3', name: "De Muro", photo: "sa_resort2.jpg", startingPrice: '900$'},
      {id: '1-4', name: "Coral Beach", photo: "sa_resort5.jpg", startingPrice: '850$'},
      {id: '1-5', name: "Gran Oasis", photo: "sa_resort4.jpg", startingPrice: '1100$'},
    ]
  },
  {
    id: 3, 
    title: "Egypt",
    background: "desert360.jpg", 
    locations: [
      {id: '1-1', name: "Parrotel Aqua", photo: "sa_resort4.jpg", startingPrice: '350$'},
      {id: '1-2', name: "SUNRISE Arabian", photo: "sa_resort2.jpg", startingPrice: '1000$'},
      {id: '1-3', name: "Tropitel Sahl", photo: "sa_resort.jpg", startingPrice: '350$'},
      {id: '1-4', name: "Tamra Beach", photo: "sa_resort3.jpg", startingPrice: '750$'},
      {id: '1-5', name: "Jaz Makadi", photo: "sa_resort5.jpg", startingPrice: '900$'},
    ]
  },
]

class DestinationScreen extends React.Component {

  state = {
    destination: undefined
  }

  componentWillMount() {
    const destinationId = this.props.match.params.id
    this.getDestination(destinationId)
  }

  componentDidMount() {
    const {destination} = this.state    
    Environment.setBackgroundImage(asset(destination.background));
    this.setState({
      currentCountry: toJS(store.navigationHistory.currentCountry)
    })
  }

  getDestination(destinationId) {
    const destination = destinationsWithLocations.find((destination) => {
      return destination.id === parseInt(destinationId)
    })  
    
    this.setState({destination})
  }

  _onClick(location) {
    console.log(location)
    const destination = {
      id: location.id,
      title: location.name,
      locations: [
        {id: '1-1', name: "Standart suite", photo: "sa_resort.jpg", startingPrice: '800$', fullScreenPreview: true, roomdescription: 'Spacious, bright and outward facing rooms measuring 19 m2 and totally refurbished. The room comes with Dreamax bed (manufactured and designed exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished in top quality bronze coloured ceramics and an independent entrance. It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. '},
        {id: '1-2', name: "Single room", photo: "sa_resort2.jpg", startingPrice: '1200$', fullScreenPreview: true, roomdescription: 'Spacious, bright and outward facing rooms measuring 27 m2 and totally refurbished. The room comes with double bed or twin beds with Dreamax mattress (manufactured and designed exclusively by Flex for Meliá Hotels International), a modern, fully equipped bathroom finished in top quality bronze coloured ceramics and an independent hallway-dressing area. '},
        {id: '1-3', name: "Double room", photo: "sa_resort3.jpg", startingPrice: '900$', fullScreenPreview: true, roomdescription: 'Enjoy unlimited experiences in this 51 m2 room with a lounge and amazing windows offering beautiful views over the Plaza de España and hotel pool, plus a bedroom with a double bed or two single beds and a full bathroom'},
      ]
    }
    if (location.fullScreenPreview) {

      store.updateNavigationHistory({
        roomDescription: location.roomdescription
      })

      this.props.history.push(`/rooms/${location.id}`)
    } else {
      this.setState({destination, currentCountry: location.name})
    }    
  }

  render() {
    const {destination, currentCountry} = this.state
    const {history} = this.props

    console.log(this.props)
    
    return (
      <View stlye={styles.container}>
        <VrButton onClick={() => history.goBack()} style={styles.goBack}>
          <Text style={styles.buttonText}>
            {`<`}
          </Text>            
        </VrButton>
        <Text style={styles.title}>
          {currentCountry}
        </Text>
        <View style={styles.panel}>
          {destination && destination.locations.map((location) => {
              return (
                <DestinationLiftup
                  onClick={(location) => this._onClick(location)}
                  destination={location} 
                  key={location.id} 
                />
              )
            })
          }   
        </View>          
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

export default (observer(DestinationScreen))