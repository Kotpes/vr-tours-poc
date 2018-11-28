import {observable, decorate, action} from 'mobx'

let index = 0

class Store {
  navigationHistory = {
    currentCountry: '',
    currentResort: '',
    roomDescription: '',
  }

  updateNavigationHistory = (data) => {
    console.log(data)
    if (data.currentCountry !== '') {
      this.navigationHistory.currentCountry = data.currentCountry
    }
    if (data.currentResort !== '') {
      this.navigationHistory.currentResort = data.currentResort
    }
    if (data.roomDescription !== '') {
      this.navigationHistory.roomDescription = data.roomDescription
    }
  }
}

decorate(Store, {
  navigationHistory: observable,
  updateNavigationHistory: action,
})


const store = new Store()
export default store