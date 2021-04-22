import React, { useState } from 'react';
import green from '../img/green.jpg';
import pink from '../img/pink.jpg';



const ProfilePicker = () => {
    const [profilePic, setProfilePic] = useState('');

    const handleClickGreen = () => {
        setProfilePic('green')
        console.log(profilePic)
    }

    const handleClickPink = () => {
        setProfilePic('pink')
        console.log(profilePic)
    }
    return (

        <div>
            <h3>Pick your profile picture</h3>
            <img src={green} alt='picture of green plant' onClick={() => handleClickGreen()}></img>
            <img src={pink} alt='picture of pink flower' onClick={() => handleClickPink()}></img>
            <p>{profilePic}</p>
        </div>
    )
};


export default ProfilePicker
