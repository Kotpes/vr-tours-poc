import React from 'react'
import { Text, View, Image, asset, StyleSheet } from 'react-360'

export default class Weather extends React.Component {

  render() {
    const {weatherData} = this.props
    console.log(weatherData);
    
    return weatherData ? (
      <View style={styles.container}>
        <Text style={styles.cityName}>
          {weatherData.city}
        </Text>
        <View style={styles.icon}>
          <Image source={asset('sunny.png')} style={{width: 64, height: 64}} />
        </View>
        <Text style={styles.temp}>{Math.round(weatherData.temp)} C</Text>       
      </View>
    ) : (
      <View><Text>Loading</Text></View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    flex: 1, 
    alignItems: 'center',
    marginBottom: 40,
  },
  cityName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 50
  },
  temp: {
    flex:1,
    fontSize: 40,
    textAlign: 'center'
  }
})