import React, { useState } from 'react'
import { db, auth } '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessages({ scroll }) {
    const [msg, setMsg] = useState('')
    async funciton SendMessages(e){
        e.preventDefault()
        const { uid, photoURL } = <auth className="currentUser"></auth>


        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView{ behavior: 'smooth' }
    }
    return (
        <div>
            <form onSubmit={SendMessages}>
                <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                <Button type="submit">Send</Button>
            </form>

        </div>
    )
}

export default SendMessages