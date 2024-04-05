import React, {Component} from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/errorBoundary";
import "./app.css";
import {robots} from "../db/robotsDB";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response);
      }) // Promise, when fullfilled is array of objects
      .then((users) => this.setState({robots: users})) // the array of objects
      .catch((response) => {
        console.log("Error fetching robots:", response.status, response.statusText);
        console.log("Using backup robot DB instead.")
        this.setState({robots: robots});
      });
    // .then((users) => {});
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll
            style={{
              overflowY: "scroll",
              border: "5px solid black",
              height: "800px",
            }}
          >
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
