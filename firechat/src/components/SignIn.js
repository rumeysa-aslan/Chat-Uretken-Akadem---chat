import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase.js'
import {Button} from '@material-ui/core'

function SignIn() {
    function signInWhithGoogle(){
       const provider = new firebase.auth.GoogleAuthProvider()
       auth.signInWhithPopup(provider)
    }
  return (
    <div>
        <Button onClick={signInWhithGoogle}> Sign In With Google</Button>
    </div>
  )
}

export default SignIn