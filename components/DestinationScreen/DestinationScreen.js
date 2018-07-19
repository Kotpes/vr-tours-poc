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
const {VideoModule} = NativeModules;


const destinationsWithLocations = [
  {
    id: 1, 
    title: "South Africa",
    background: "africa360.jpg",
    locations: [
      {id: 1.1, title: "Crawford's Beach Lodge", photo: "sa_resort.jpg", startingPrice: '800$'},
      {id: 1.2, title: "Peermont Mondior at Emperors Palace", photo: "sa_resort.jpg", startingPrice: '1200$'},
      {id: 1.3, title: "Protea Hotel Rustenburg Hunters Rest", photo: "sa_resort.jpg", startingPrice: '900$'},
      {id: 1.4, title: "The Kingdom Resort", photo: "sa_resort.jpg", startingPrice: '1100$'},
      {id: 1.5, title: "Monkey Valley Resort", photo: "sa_resort.jpg", startingPrice: '1250$'},
    ]
  },
  {
    id: 2, 
    title: "Spain", 
    background: "spain360.jpg",
    locations: [
      {id: 1.1, title: "Iberostar Playa de Muro Village", photo: "spain_resort.jpg", startingPrice: '600$'},
      {id: 1.2, title: "Iberostar Albufera Playa", photo: "spain_resort.jpg", startingPrice: '450$'},
      {id: 1.3, title: "Iberostar Playa de Muro", photo: "spain_resort.jpg", startingPrice: '900$'},
      {id: 1.4, title: "Iberostar Marbella Coral Beach", photo: "spain_resort.jpg", startingPrice: '850$'},
      {id: 1.5, title: "Gran Oasis Resort", photo: "spain_resort.jpg", startingPrice: '1100$'},
    ]
  },
  {
    id: 3, 
    title: "Egypt",
    background: "desert360.jpg", 
    locations: [
      {id: 1.1, title: "Parrotel Aqua Park", photo: "eg_resort.jpg", startingPrice: '350$'},
      {id: 1.2, title: "SUNRISE Arabian Beach Resort -Grand Select-", photo: "eg_resort.jpg", startingPrice: '1000$'},
      {id: 1.3, title: "Tropitel Sahl Hasheesh", photo: "eg_resort.jpg", startingPrice: '350$'},
      {id: 1.4, title: "Tamra Beach", photo: "eg_resort.jpg", startingPrice: '750$'},
      {id: 1.5, title: "Jaz Makadi Saraya Resort", photo: "eg_resort.jpg", startingPrice: '900$'},
    ]
  },
  {
    id: 4, 
    title: "Australia",
    background: "australia360.jpg", 
    locations: [
      {id: 1.1, title: "Sal Salis, Cape Range National Park", photo: "au_resort.jpg", startingPrice: '1350$'},
      {id: 1.2, title: "Sheraton Mirage, Port Douglas", photo: "au_resort.jpg", startingPrice: '1900$'},
      {id: 1.3, title: "The Byron at Byron Bay", photo: "au_resort.jpg", startingPrice: '2350$'},
      {id: 1.4, title: "Southern Ocean Lodge, Kangaroo Island", photo: "au_resort.jpg", startingPrice: '3750$'},
      {id: 1.5, title: "Saffire Freycinet, Tasmania", photo: "au_resort.jpg", startingPrice: '3900$'},
    ]
  },
  {
    id: 5, 
    title: "USA", 
    background: "usa360.jpg",
    locations: [
      {id: 1.1, title: "Turtle Bay Resort in Oahu, Hawaii", photo: "us_resort.jpg", startingPrice: '2350$'},
      {id: 1.2, title: "Grand Hotel on Mackinac Island, Michigan", photo: "us_resort.jpg", startingPrice: '2900$'},
      {id: 1.3, title: "Vista Verde Guest Ranch in Clark, Colorado", photo: "us_resort.jpg", startingPrice: '2150$'},
      {id: 1.4, title: "Woodloch Pines Resort in Hawley, Pennsylvania", photo: "us_resort.jpg", startingPrice: '3350$'},
      {id: 1.5, title: "White Stallion Ranch in Tucson, Arizona", photo: "us_resort.jpg", startingPrice: '3350$'},
    ]
  }
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
  }

  getDestination(destinationId) {
    const destination = destinationsWithLocations.find((destination) => {
      return destination.id === parseInt(destinationId)
    })  
    
    this.setState({destination})
  }

  render() {
    const {destination} = this.state
    const {history} = this.props
    
    return (
      <View>
        <Text> Here we go! {this.props.match.params.id} </Text>
        {destination &&
          <VrButton onClick={() => history.goBack()}>
            <Text style={{fontSize: 40, color: 'white', fontWeight: '700'}}>
              {destination.title}
            </Text>            
          </VrButton>
        }
      </View>
    );
  }
}

export default DestinationScreen