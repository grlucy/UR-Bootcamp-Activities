import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  //Add a `componentDidMount` method which should utilize the `API.js` module to query the OMDB API for the movie "The Matrix" when the component mounts. Then update this component's `result` state with the result of the AJAX request.
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  //Add a `handleInputChange` method which should be called whenever the user types into the input field. Inside of this method, set `this.state.search` equal to the new value of the input field.
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  //Add a `handleFormSubmit` method which should be called when the form is submitted. Inside of this method, utilize the `API` module to search the OMDB API for the value of `this.state.search`. Then update this component's `result` state with the result.
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
