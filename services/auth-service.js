import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password,
                url: user.url
            })
            .then(response => {
                if (response) {
            
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                //this.singleData = response.data.status

                return response.data;
            }).catch(
      function (error) {
        console.log('Show error notification!')
      }
    );
    }

    logout() {
        localStorage.removeItem('user');
        
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
