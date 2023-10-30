import { Component } from 'react';
import SearchBar from '../../components/searchBar';
import Results from '../../components/results';
import Api from '../../service/api';

import './index.css';

class Home extends Component {
  state = {
    drinks: [],
    isLoading: true,
  };

  componentDidMount() {
    const searchStorage = localStorage.getItem('searchForm');

    if (searchStorage) {
      this.fetchData(searchStorage);
    } else {
      this.fetchData('');
    }
  }

  fetchData = (searchTerm: string | null) => {
    Api.getDrinks(searchTerm).then((data) => {
      if (data) {
        this.setState({ drinks: data.drinks, isLoading: false });
      }
    });
  };

  handleTestError = () => {
    throw new Error('This is a test error');
  };

  render() {
    const { drinks, isLoading } = this.state;

    return (
      <div data-testid="main-page">
        <button className="error__button" onClick={this.handleTestError}>
          Throw an Error
        </button>
        <SearchBar onSearch={this.fetchData} />
        <Results drinks={drinks} isLoading={isLoading} />
      </div>
    );
  }
}

export default Home;
