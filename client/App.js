import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import paths from './RouterPaths';
import CategoryRouter from './CategoryRouter';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MainPage from './components/MainPage';
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';

class App extends React.Component {
  constructor(props) {
    super(props);
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
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Title />
        <Switch>
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
          <CategoryRouter categories={this.state.categories} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(App);
