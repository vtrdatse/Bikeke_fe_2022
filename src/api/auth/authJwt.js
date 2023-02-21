export const getTokenApi = async (idToken) => {
    try {
        console.log('id toke gui len : ' + idToken.replace(/\s/g, ''));
        if (idToken) {
            const idtokenJson = {
                idToken: idToken,
            };
            fetch('https://another-bikeke2.herokuapp.com/api/v1/auth/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(idtokenJson),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    if (data.accessToken) {
                        localStorage.setItem(
                            'access_token',
                            data.tokenType + ' ' + data.accessToken,
                        );
                    }
                    return data;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    } catch (error) {
        console.log(error);
    }
};
// export const getAuthTokenApi = (idtokenJson) =>
//     axios.post({
//         baseURL: '/auth/admin',
//         idtokenJson,
//     });
