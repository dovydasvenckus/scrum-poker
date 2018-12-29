import React from "react";
import Card from "./card";

class ScrumPoker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1, 2, 3, 5, 8, 13, 21, coffeSymbol]
    };
  }
  render() {
    const cardsDom = this.state.cards.map(cardValue => (
      <Card key={cardValue} content={cardValue} />
    ));
    return <div className="cards">{cardsDom}</div>;
  }
}

const coffeSymbol = "☕";

export default ScrumPoker;