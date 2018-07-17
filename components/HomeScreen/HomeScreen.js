import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import DestinationLiftup from './DestinationLiftup'

const destinations = {
  title: "Destinations",
  items: [
    {name: "South Africa", photo: "./static_assets/africa.jpg", id: "1", startingPrice: '1000$'},
    {name: "Spain", photo: "./static_assets/espania.jpg", id: "2", startingPrice: '1200$'},
    {name: "Egypt", photo: "./static_assets/egypt.jpg", id: "3", startingPrice: '900$'},
    {name: "Australia", photo: "./static_assets/australia.jpg", id: "4", startingPrice: '2000$'},
    {name: "USA", photo: "./static_assets/usa.jpg", id: "5", startingPrice: '700$'},
  ]
}

class HomeScreen extends React.Component {

  _onClick = (destinationId) => {
    this.props.history.push(`/destinations/${destinationId}`)
  }

  render() {
    
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
                  onClick={(destinationId) => this._onClick(destinationId)}
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
    height: 600,
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


export default HomeScreen