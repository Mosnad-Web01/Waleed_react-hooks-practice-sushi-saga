import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [budget, setBudget] = useState(100); // Initial budget
  const [sushiIndex, setSushiIndex] = useState(0);
  const [eatenSushiIds, setEatenSushiIds] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushi(data));
  }, []);

  const eatSushi = (sushiToEat) => {
    if (budget >= sushiToEat.price && !eatenSushiIds.includes(sushiToEat.id)) {
      setBudget(budget - sushiToEat.price);
      setEatenSushiIds([...eatenSushiIds, sushiToEat.id]);
    } else {
      alert("Not enough money or sushi already eaten!");
    }
  };

  const loadMoreSushi = () => {
    setSushiIndex(sushiIndex + 4);
  };

  return (
    <div className="app">
      <SushiContainer
        sushi={sushi.slice(sushiIndex, sushiIndex + 4)}
        eatSushi={eatSushi}
        loadMoreSushi={loadMoreSushi}
      />
      <Table budget={budget} plates={eatenSushiIds} />
    </div>
  );
}

export default App;
