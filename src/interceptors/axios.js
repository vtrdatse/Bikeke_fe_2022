import axios from 'axios';
import LocalStorageKey from '~/utils/LocalStorageKey';

axios.defaults.baseURL = 'https://another-bikeke2.herokuapp.com/api/v1/';

let refresh = false;

const handleLocalStorage = () => {
    window.localStorage.setItem('isThisInLocalStorage', 'true');
    window.dispatchEvent(new Event('storage'));
};

if (localStorage.getItem('access_token')) {
    axios.defaults.headers.common['Authorization'] =
        localStorage.getItem('access_token');
}

axios.interceptors.response.use(
    (resp) => resp,
    async (error) => {
        console.log('error Api: ' + JSON.stringify(error));
        if (error?.response?.status === 403 && !refresh) {
            refresh = true;
            if (localStorage.getItem(LocalStorageKey.ID_TOKEN)) {
                axios
                    .post(
                        'auth/admin',
                        {
                            idToken: localStorage.getItem(
                                LocalStorageKey.ID_TOKEN,
                            ),
                        },
                        { withCredentials: true },
                    )
                    .then((res) => {
                        if (res?.status == 200) {
                            axios.defaults.headers.common[
                                'Authorization'
                            ] = `Bearer ${res.data['accessToken']}`;
                            handleLocalStorage();
                            localStorage.setItem(
                                'access_token',
                                'Bearer ' + res.data['accessToken'],
                            );

                            return axios(error.config);
                        }
                    })
                    .catch((error) => {
                        // handle the error here...
                        alert('Have an error!');
                    });
            }
        }
        refresh = false;
        return error;
    },
);
