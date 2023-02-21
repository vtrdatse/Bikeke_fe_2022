import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Logout, signInWithGoogle } from '~/services/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import LoginGoogle from '../Login';
import LogoutGoogle from '../Logout';
import LocalStorageKey from '../../../../utils/LocalStorageKey';
import { gapi } from 'gapi-script';
import * as authJwt from '../../../../api/auth/authJwt';

const clientId =
    '809357951525-7u827d64p1ip79cr8o7126ntcna596gd.apps.googleusercontent.com';
const cx = classNames.bind(styles);

function Header({ user }) {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    });
    const setAccessToken = (tokenId) => {
        const result = authJwt.getTokenApi(tokenId);

        console.log('result: ' + result.tokenType + '-' + result.accessToken);
    };
    const handleSetUser = (userData) => {
        if (userData) {
            localStorage.setItem(
                LocalStorageKey.USER_INFO,
                JSON.stringify(userData),
            );
            setAccessToken(userData.tokenId);
            setUserInfo(userData);
            console.log('userData: ' + JSON.stringify(userData));
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button bar orange>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                {user && (
                    <div className={cx('user')}>
                        <img
                            src={user.PhotoURL}
                            alt={'avatar'}
                            referrerPolicy="no-referrer"
                            id="avatar"
                        />
                        <h3>{user.name}</h3>
                        {/* <Button orange login onClick={Logout}>
                            Logout
                        </Button> */}
                        <LogoutGoogle />
                    </div>
                )}
                {!user && (
                    // <Button orange login onClick={SignInGoogle}>
                    //     Login
                    // </Button>
                    <LoginGoogle handleSetUser={handleSetUser} />
                )}
            </div>
        </header>
    );
}
export default Header;
