import React from "react";
import NavBar from "./Navbar";

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      likes: 0,
      status: "",
      description: "",
      temp: ""
    };
  }

  componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=d142dda5f5872d98aba1320657efd1e1&units=imperial";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.state.fetched = true;
        this.state.status = data.weather[0].main;
        this.state.description = data.weather[0].description;
        this.state.temp = data.main.temp;
      });
  }


  show() {
    let t = this.state.temp;
    let d = this.state.description;
    let s = this.state.status;
    let emoji = "";


    t = t.toFixed(0);

    d = d
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");

    let string = `${d} , ${t}°F`;

    switch (s) {
      case "Clear":
        emoji = "☀️";
        break;
      case "Thunderstorm":
        emoji = "⚡";
        break;
      case "Drizzle":
        emoji = "🌦";
        break;
      case "Rain":
        emoji = "🌧";
        break;
      case "Snow":
        emoji = "❄";
        break;
      case "Clouds":
        if (d.includes("few")) {
          emoji = "🌤";
          break;
        } else if (d.includes("scattered")) {
          emoji = "⛅";
          break;
        } else if (d.includes("broken")) {
          emoji = "🌥";
          break;
        } else {
          emoji = "☁️";
          break;
        }
      default:
        break;
    }

    return (
      <div className="weather-icon">
        <span role="img" aria-label="weather-emoji">
          {emoji}
        </span>
        {string}
      </div>
    );
  }

  handleLike() {
    let currentLikes = this.state.likes;
    let updatedLikes = currentLikes + 1;
    this.setState({ ...this.state, likes: updatedLikes });
  }

  render() {
    let weather = "";
    if (this.state.fetched) {
      weather = this.show();
    }

    let message = "Love this content? Like this app below!";
    if (this.state.likes >= 5) {
      message = "This app is trending! Like this app below:";
    }

    return (
      <div>
        <NavBar />
        <div id="st-container">
          <div id="main-content" onClick={this.closeMenu}>
            <div id="st-content">
              <h1> Simple App </h1>
              <div id="weather">
                {" "}
                Current Weather in San Francisco:{" "}
                {this.state.fetched && weather}{" "}
              </div>
            </div>
            <h5 style={{ color: "darkblue" }}>{message}</h5>
            <button onClick={() => this.handleLike()}> Like this page </button>
            <h5>Current Likes: {this.state.likes}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default AppPage;
