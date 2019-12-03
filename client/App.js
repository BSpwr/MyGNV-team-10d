import { hot } from 'react-hot-loader/root';
import React from 'reactn';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import paths from './RouterPaths';
import CategoryRouter from './CategoryRouter';
import ProtectedRoute from './ProtectedRoute';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MainPage from './components/MainPage';
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';
import AdminPortal from './components/AdminPortal';
import IndivProvider from './components/IndivProvider';

import CategoryAdmin from './components/admin/CategoryAdmin';

import AuthState from './components/auth/AuthState';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.global.auth.login('taco', 'cat');
    this.state = {
      providers: [],
      categories: [],
      filterText: '',
      selectedProvider: '',
    };
  }

  componentDidMount() {
    axios
      .get('/api/provider')
      .then((res) => {
        this.setState({ providers: Object.values(res.data) });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('/api/category')
      .then((res) => {
        this.setState({
          categories: Object.values(res.data).map((category) => {
            category.path = paths.generateCategoryPath(category);
            return category;
          }),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateFilterText = (value) => {
    this.setState({ filterText: value });
  };

  updateSelected = (id) => {
    this.setState({ selectedProvider: id });
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <AuthState />
        <NavBar />
        <Title />
        <Login />
        <Switch>
          <Route
            exact
            path={paths.categoryAdminPath}
            component={CategoryAdmin}
          />
          <Route exact path={paths.register} component={Register} />
          <Route
            exact
            path={paths.adminPath}
            render={() => (
              <AdminPortal
                providers={this.state.providers}
                // updateFilterText={this.updateFilterText}
              />
            )}
          />
          <Route exact path={paths.mainPath} component={MainPage} />
          <Route
            exact
            path={paths.searchPath}
            render={() => (
              <SearchBar
                providers={this.state.providers}
                updateFilterText={this.updateFilterText}
              />
            )}
          />
          <Route
            exact
            path={paths.displayProvidersPath}
            render={() => (
              <DisplayProviders
                providers={this.state.providers}
                filterText={this.state.filterText}
                selectedProvider={this.state.selectedProvider}
                updateSelected={this.updateSelected}
              />
            )}
          />
          <Route
            exact
            path={paths.individualPath + '/:id'}
            render={(props) => <IndivProvider id={props.match.params.id} />}
          />
          <CategoryRouter categories={this.state.categories} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(App);
