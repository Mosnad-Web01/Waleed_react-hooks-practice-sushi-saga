import React from "react";

function Sushi({ sushi, eatSushi }) {
  const isEaten = sushi.eaten || false; // Check if sushi has been eaten

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
