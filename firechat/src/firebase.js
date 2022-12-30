import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyCUffzqmMqkqP0-vGg38wPUTrEcbsj-_ws",
authDomain: "firechat-f4c27.firebaseapp.com",
projectId: "firechat-f4c27",
storageBucket: "firechat-f4c27.appspot.com",
messagingSenderId: "547157395106",
appId: "1:547157395106:web:9ccf35a411e878c63b79fb",
measurementId: "G-VSG0L2RPD3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db , auth }