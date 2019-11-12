import { hot } from 'react-hot-loader/root';
import React from 'react';
import axios from 'axios';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MainPage from './components/MainPage';
import DisplayProviders from './components/DisplayProviders';
import Title from './components/Title';
import Categories from './components/Categories';

import { Route, Switch } from 'react-router-dom';
import IndivProvider from './components/IndivProvider';

const IndividualProvider= () => { // i wanna be able to just access providers but idk how to do that without having 
  return (
    <>
      <h3>Individual Provider Page</h3>
      {providers.map((provider, index) => (
        <h5 key={index}>
          <Link to={`/provider/${index + 1}`}>{provider}'s Page</Link>
        </h5>
      ))}
    </>
  )
};


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
    console.log(id)
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Title />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route
            exact path='/search'
            render={() => (
              <SearchBar
                providers={this.state.providers}
                updateFilterText={this.updateFilterText}
              />
            )}
          />
          <Route
            exact path='/providers'
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
            exact path='/providers/:id'
            render={()=> (
              <IndivProvider 
                providers={this.state.providers}
                filterText={this.state.filterText}
                selectedProvider={this.state.selectedProvider}
                updateSelected={this.updateSelected}
              />
            )}
          />
          <Route exact path='/categories' component={Categories} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(App);
