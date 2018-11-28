import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
} from 'react-360';

import {toJS} from 'mobx'
import {observer} from 'mobx-react/native'
import store from '../../store/store'
import Weather from './Weather'

const locations = [
  {
    country: 'South Africa',
    cities: ['Cape Town', 'Johannesburg', 'Kimberley']
  },
  {
    country: 'Spain',
    cities: ['Madrid', 'Barcelona', 'Valencia']
  },
  {
    country: 'Egypt',
    cities: ['Cairo', 'Alexandria', 'Luxor']
  },
  {
    country: 'Australia',
    cities: ['Sydney', 'Melbourn', 'Perth']
  },
  {
    country: 'USA',
    cities: ['Miami', 'Los Angeles', 'Daytona beach']
  },
  {
    country: 'Thailand',
    cities: ['Bangkok', 'Pattaya', 'Phuket']
  },
]

const countriesFact = [
  {
    country: 'South Africa',
    fact: 'South Africa is now the only country in the world to have hosted the Soccer, Cricket and Rugby World Cup! Table Mountain in Cape Town is believed to be one of the oldest mountains in the world and one of the planet\'s 12 main energy centres, radiating magnetic, electric or spiritual energy'
  },
  {
    country: 'Spain',
    fact: 'The highest Spanish mountain is not in Spain. Well, it is in Spain, but not in the Iberian Peninsula. A fun fact about Spain is that the highest mountain in the country is Mount Teide (3718 meters). This mountain is situated in the Canary Islands and is an active volcano.'
  },
  {
    country: 'Egypt',
    fact: 'Egypt is known primarily for its deserts, pyramids, and the Nile River, which is the longest river in the world. Approximately 95% of Egyptians live along the Nile River. The Nile Valley is one of the least densely populated areas in the world.'
  },
  {
    country: 'Australia',
    fact: 'The reef consists of more than 3,000 reefs in which live more than 350 species of corals and over 1,500 species of fish. Australia is the world\'s largest exporter of coal! Australia is in fact the driest inhabited continent of the world'
  },
  {
    country: 'USA',
    fact: 'The United States emerged from the thirteen British colonies established along the East Coast. Numerous disputes between Great Britain and the colonies following the French and Indian War led to the American Revolution, which began in 1775, and the subsequent Declaration of Independence in 1776.'
  },
  {
    country: 'Thailand',
    fact: 'Thailand is a land of surprise (and beautiful beach resorts)! 1. Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.”'
  },
]

const API_KEY='1763b82aeb6962a91d519125ba371e75'

class RightPanel extends React.Component {
  state = {
    weatherData: undefined
  }

  componentDidMount() {
    const randomCity = this.getRandomCity()
    this.getWeather(randomCity)
  }

  async getWeather(city) {
    try {
      const res = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
      const data = await res.json()
      const weatherData = {
        city,
        weather: data.weather[0],
        temp: data.main.temp,
      }
      this.setState({weatherData})
    } catch (error) {
      console.log(error)
    }
  }
  
  getCountryFact(country) {
    const fact = countriesFact.find(item => item.country === country).fact
    return fact ? fact : 'no facts found'
    console.log(fact)
  }
  
  getRandomCity() {
    const randomLocation = locations[Math.floor(Math.random()*locations.length)]
    return randomLocation.cities[Math.floor(Math.random()*randomLocation.cities.length)]
  }

  render() {
    const currentView = store.navigationHistory.currentView
    const currentLocation = toJS(store.navigationHistory.currentCountry)
    const roomdescription = toJS(store.navigationHistory.roomDescription)
    const {weatherData} = this.state

    console.log(store, store.navigationHistory.roomDescription)

    return (
      <View style={styles.container}>       
        <View>
          {roomdescription ? (
            <View>
              <Text>{roomdescription}</Text>
            </View>
          ) : currentLocation ? (
            <View>
              <Text style={styles.currentLocation}>{currentLocation}</Text>
              <Text style={styles.fact}>
                {this.getCountryFact(currentLocation)}
              </Text>
            </View>
            
          ) : (
            <Weather weatherData={weatherData} />
          )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 800,
    backgroundColor: 'rgba(0,0,0,.7)',
    padding: 15,
    overflow: 'scroll'
  },
  currentLocation: {
    flex: 1,
    textAlign: 'center',
    fontSize: 38,
    marginBottom: 60
  },
  fact: {
    flex: 1,
  }
})

export default observer(RightPanel)