import React, { Component } from 'react';

import './index.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

class SearchBar extends Component<SearchBarProps> {
  state = {
    search: '',
  };

  componentDidMount() {
    const searchStorage = localStorage.getItem('searchForm');

    if (searchStorage) {
      this.setState({ search: searchStorage });
    }
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value.trim() });
  };

  handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('searchForm', this.state.search);
    this.props.onSearch(this.state.search);
  };

  render() {
    return (
      <div className="search-form__wrapper">
        <form className="search-form" onSubmit={this.handleSearchSubmit}>
          <input
            data-testid="search-input"
            className="search-form__input"
            type="search"
            value={this.state.search}
            onChange={this.handleSearchChange}
            placeholder="Search for a drink..."
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
