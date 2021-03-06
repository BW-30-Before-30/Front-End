import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BucketList from './BucketList.js';
import uhm from '../../assets/uhm.jpg';
import testphotoforapp from '../../assets/testphotoforapp.jpg';
//import { Link, Route } from 'react-router-dom'
import AddItemForm from './AddItemForm.js';
import {Provider} from '../../contexts/context'
import decode from 'jwt-decode'

const UserDash = props => {
    console.log(props)
    console.log('userdash')

    const [isPublic, setIsPublic] = useState({public:true})
   
    const [user, setUser] = useState({
        displayname: '',
    });
    const ITEM_DATA = [] 
    const token  = localStorage.getItem('token')
    const decoded = decode(token)
    useEffect(() => {
        axios
        .get(`https://project-30-before-30.herokuapp.com/api/users/${decoded.id}`)
        .then(res => {
            //console.log(res.data);
            setUser(res.data);
        })
        .catch(err => {console.log(err)})
    }, [])

    const handleSubmit = () => {
        const flip = !(isPublic.public)
        setIsPublic({public:flip})

        axios
        .put(`https://project-30-before-30.herokuapp.com/api/bucketlists/${decoded.id}`,  isPublic)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div to={`/user/${decoded.id}`} className="user-dash-wrapper">
            <div className="user-dash-img"><img src={testphotoforapp} alt="User Header" /></div>
            <button onClick={handleSubmit} className="public-button">MAKE PUBLIC</button>
            <div className="user-dash-grid-container">
                <div>
                    <img className="prof-pic" src={uhm} alt="User Headshot" />
                    <h1>{user.displayname}</h1>
                </div>
                    <BucketList />
            </div>
            <AddItemForm />
        </div>
    )
}

export default UserDash