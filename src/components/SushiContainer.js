import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushi, eatSushi, loadMoreSushi }) {
  return (
    <div className="belt">
      {sushi.map((sushiItem) => (
        <Sushi key={sushiItem.id} sushi={sushiItem} eatSushi={eatSushi} />
      ))}
      <MoreButton loadMoreSushi={loadMoreSushi} />
    </div>
  );
}

export default SushiContainer;
