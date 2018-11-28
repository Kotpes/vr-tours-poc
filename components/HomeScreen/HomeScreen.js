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
import {action} from 'mobx'
import DestinationLiftup from './DestinationLiftup'
import store from '../../store/store'


const destinations = {
  title: "Destinations",
  items: [
    {name: "South Africa", photo: "africa.jpg", id: "1", startingPrice: '1000$'},
    {name: "Spain", photo: "espania.jpg", id: "2", startingPrice: '1200$'},
    {name: "Egypt", photo: "egypt.jpg", id: "3", startingPrice: '900$'},
  ]
}

class HomeScreen extends React.Component {

  _onClick = (destination) => {
    this.props.history.push(`/destinations/${destination.id}`)
    store.updateNavigationHistory({
      currentCountry: destination.name
    })
  }

  componentDidMount() {
    Environment.setBackgroundImage(asset('lake.jpg'));
  }

  render() {

    console.log(this.props)
    
    return (
      <View style={styles.container}>
        {destinations.title &&
          <Text style={styles.title}>{destinations.title}</Text>
        }
        <View style={styles.panel}>
          {
            destinations.items && destinations.items.map((destination) => {
              return (
                <DestinationLiftup
                  onClick={(destination) => this._onClick(destination)}
                  destination={destination} 
                  key={destination.id} 
                />
              )
            })
          }   
        </View>   
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
  title: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 40,
    fontWeight: '700',
    color: 'black'
  },
  greeting: {
    fontSize: 30,
  },
});


export default observer(HomeScreen)