import React from 'reactn';
import axios from 'axios';

class AuthState extends React.Component {
  constructor(props) {
    super(props);
    // Make auth state globally available
    this.setGlobal({
      isAuthenticated: false,
      userEmail: null,
    });

    // Check if the user is already logged in (if they refresh the page)
    this.checkIfAuthenticated();
  }

  checkIfAuthenticated = () => {
    axios
      .post('/api/user/isLoggedIn')
      .then((res) => {
        this.setGlobal({
          isAuthenticated: res.data.success,
          userEmail: res.data.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return null;
  }
}

export default AuthState;
