import React, { Component } from "react";
import { RoomContext } from "../context";

export default class extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return (
      <div>
        <h1>hello from featured rooms</h1>
      </div>
    );
  }
}
