import React, { useState } from 'react';
import green from '../img/green.jpg';
import pink from '../img/pink.jpg';



const ProfilePicker = () => {
    const [profilePic, setProfilePic] = useState('');


    return (

        <div>
            <h3>Pick your profile picture</h3>
            <img src={green} alt='green plant' onClick={() => setProfilePic('green')}></img>
            <img src={pink} alt='pink flower' onClick={() => setProfilePic('pink')}></img>
            <p>{profilePic}</p>
        </div>
    )
};


export default ProfilePicker
