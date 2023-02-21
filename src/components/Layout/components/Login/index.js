import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import LocalStorageKey from '~/utils/LocalStorageKey';
import { refreshTokenSetup } from '~/utils/refreshToken';

const clientId =
    '518656647195-jrug4gar0b1u63jtnnbgkhgpnt2tv2h4.apps.googleusercontent.com';

function LoginGoogle(props) {
    const setUser = (user) => {
        props.handleSetUser(user);
    };

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        localStorage.setItem(LocalStorageKey.LOGIN_AT, new Date());
        // initializing the setup
        refreshTokenSetup(res);
        const user = {
            ID: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            PhotoURL: res.profileObj.imageUrl,
            tokenId: res.tokenId,
        };
        setUser(user);
        console.log('user:', user);
        console.log('token id:', res.tokenId);
    };
    const onFailure = (res) => {
        console.log('Login failed] res:', res);
    };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin '}
                style={{ marginTop: '100px' }}
                issignedIn={true}
            />
        </div>
    );
}
export default LoginGoogle;
