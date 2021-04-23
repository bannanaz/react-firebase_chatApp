import React, { useState, useEffect, useContext } from 'react';
import green from '../img/green.jpg';
import pink from '../img/pink.jpg';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';


const ProfilePicker = ({ firebase }) => {
    const [profilePic, setProfilePic] = useState('');
    const userID = useContext(AuthUserContext).uid;


    useEffect(() => {
        let profilePicObj = { profilepic: profilePic }
        firebase.user(userID).update(profilePicObj)
    });

    return (
        <AuthUserContext.Consumer>
            {authUser => (
                <div>
                    <h3>Pick your profile picture</h3>
                    <button value='green' onClick={(e) => setProfilePic(e.currentTarget.value)}>
                        <img src={green} alt='green plant' ></img>
                    </button>
                    <button value='pink' onClick={(e) => setProfilePic(e.currentTarget.value)}>
                        <img src={pink} alt='pink flower' ></img>
                    </button>
                    <p>{profilePic}</p>
                </div>
            )}
        </AuthUserContext.Consumer>
    )
};


export default withFirebase(ProfilePicker)
