import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchType from "../components/SearchType";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    typeSearch: "Title",
    books: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available book categories and update this.state.books
  componentDidMount() {
    API.getBaseBooksList()
      .then(res => this.setState({ books: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooksOfType(this.state.search)
      .then(res => {
        console.log("Here1");
        console.log(res.data.items);
        if (res.data.status === "error") {
          throw new Error(res.data.items);
        }
        console.log("Here2");
        console.log(res.data.items);
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Type!</h1>
          <SearchType>typeSearch={this.state.typeSearch};</SearchType>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
