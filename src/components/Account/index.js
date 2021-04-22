import React, { useContext } from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import ProfilePicker from '../ProfilePicker';

const AccountPage = () => {
    const { username, email } = useContext(AuthUserContext);

    return (
        <div>
            <h1>Hello {username}!</h1>
            <h2>Your e-mail used for this account: {email}</h2>
            <PasswordForgetForm />
            <PasswordChangeForm />
            <ProfilePicker />
        </div>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);