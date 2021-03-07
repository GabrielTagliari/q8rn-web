import * as firebase from 'firebase'

export default ({ Vue }) => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: 'AIzaSyDQui8ooCQ54iHUYvKe1DhFRstjyiLLCeI',
    authDomain: 'q8rn-web.firebaseapp.com',
    databaseURL: 'https://q8rn-web.firebaseio.com',
    projectId: 'q8rn-web',
    storageBucket: 'q8rn-web.appspot.com',
    messagingSenderId: '737783194169',
    appId: '1:737783194169:web:3e5583b46b459692b023e8'
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  firebase.analytics()

  Vue.config.productionTip = false

  // alias
  Vue.prototype.$analytics = firebase.analytics()
}
