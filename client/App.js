import { hot } from 'react-hot-loader/root';
import React from 'react';
import axios from 'axios';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MainPage from './components/MainPage';
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';
import Categories from './components/Categories';
import SubCategories from './components/SubCategories';

import basicNeeds from './components/categories/basicNeeds';
import crisisServices from './components/categories/crisisServices';
import familyServices from './components/categories/familyServices';
import finance from './components/categories/finance';
import healthServices from './components/categories/healthServices';
import legalServices from './components/categories/legalServices';
import other from './components/categories/other';
import topLevelCategories from './components/categories/topLevelCategories';

import paths from './RouterPaths';

import { Route, Switch } from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { providers: {}, filterText: '', selectedProvider: '' };
  }

  componentDidMount() {
    axios
      .get('/api/provider')
      .then((res) => {
        this.setState({ providers: res.data });
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

  getCategoryRoutes() {
    return (
      <React.Fragment>
        <Route
          exact
          path={paths.topLevelCategoriesPath}
          render={() => <Categories categoryList={topLevelCategories} />}
        />
        <Route
          exact
          path={paths.basicNeedsPath}
          render={() => <SubCategories categoryList={basicNeeds} />}
        />
        <Route
          exact
          path={paths.crisisServicesPath}
          render={() => <SubCategories categoryList={crisisServices} />}
        />
        <Route
          exact
          path={paths.familyServicesPath}
          render={() => <SubCategories categoryList={familyServices} />}
        />
        <Route
          exact
          path={paths.financePath}
          render={() => <SubCategories categoryList={finance} />}
        />
        <Route
          exact
          path={paths.healthServicesPath}
          render={() => <SubCategories categoryList={healthServices} />}
        />
        <Route
          exact
          path={paths.legalServicesPath}
          render={() => <SubCategories categoryList={legalServices} />}
        />
        <Route
          exact
          path={paths.otherPath}
          render={() => <SubCategories categoryList={other} />}
        />
      </React.Fragment>
    );
  }

  render() {
    const categoryRoutes = this.getCategoryRoutes();
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
          {categoryRoutes}
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(App);
