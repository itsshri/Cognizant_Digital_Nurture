import React from "react";

const IndianPlayers = () => {

  const T20players = ["Rohit", "Kohli", "Pant"];
  const RanjiTrophyPlayers = ["Rahane", "Pujara", "Saha"];


  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  const oddPlayers = mergedPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = mergedPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Odd Team Players</h3>
      <ul>
        {oddPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <h3>List of Indian Players Merged</h3>
      <ul>
        {mergedPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
