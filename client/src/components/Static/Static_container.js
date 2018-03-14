import React, { Component } from "react";
import { Link } from "react-router-dom";
class Static_container extends Component {
  Assets = [
    {
      letter: "A",
      fractals: require("../../assets/fractals/A.jpg")
    },
    {
      letter: "B",
      fractals: require("../../assets/fractals/B.jpg")
    },
    {
      letter: "C",
      fractals: require("../../assets/fractals/C.jpg")
    },
    {
      letter: "D",
      fractals: require("../../assets/fractals/D.jpg")
    },
    {
      letter: "E",
      fractals: require("../../assets/fractals/E.jpg")
    },
    {
      letter: "F",
      fractals: require("../../assets/fractals/F.jpg")
    },
    {
      letter: "G",
      fractals: require("../../assets/fractals/G.jpg")
    },
    {
      letter: "H",
      fractals: require("../../assets/fractals/H.jpg")
    },
    {
      letter: "I",
      fractals: require("../../assets/fractals/I.jpg")
    }
  ];

  render() {
    return (
      <div>
        <h1> Static Test </h1>
        {this.Assets.map(item => (
          <Link to={`/static_test/reward/${item.letter}`} key={item.letter}>
            <img src={item.fractals} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Static_container;
