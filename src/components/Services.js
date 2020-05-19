import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Enjoy happy hour",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Various hiking spots",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "From a station to the resort",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Provided with light snacks",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
