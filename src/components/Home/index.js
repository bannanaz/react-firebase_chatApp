import React, { Component } from 'react';
import Messages from '../Messages.js';
import { withAuthorization } from '../Session';



const HomePage = () => (
    <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        <Messages />
    </div>
);



const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
