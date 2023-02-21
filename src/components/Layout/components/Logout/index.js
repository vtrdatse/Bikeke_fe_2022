import React from 'react';
import { GoogleLogout } from 'react-google-login';
import LocalStorageKey from '../../../../utils/LocalStorageKey';
import { Navigate, useNavigate } from 'react-router-dom';

const clientId =
    '518656647195-jrug4gar0b1u63jtnnbgkhgpnt2tv2h4.apps.googleusercontent.com';
function LogoutGoogle() {
    const navigate = useNavigate();
    const onSuccess = () => {
        localStorage.removeItem(LocalStorageKey.USER_INFO);
        localStorage.removeItem(LocalStorageKey.ACESS_TOKEN);
        window.location.href = '/login';
        <Navigate to="/login" />;
    };
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}
export default LogoutGoogle;
