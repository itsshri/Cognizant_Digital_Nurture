import React from "react";

const ListofPlayers = () => {
  // Array of 11 players with name & score
  const players = [
    { name: "Rohit Sharma", score: 85 },
    { name: "Virat Kohli", score: 95 },
    { name: "KL Rahul", score: 65 },
    { name: "Shubman Gill", score: 45 },
    { name: "Hardik Pandya", score: 78 },
    { name: "Suryakumar Yadav", score: 69 },
    { name: "Rishabh Pant", score: 88 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "Bumrah", score: 40 },
    { name: "Shami", score: 50 },
    { name: "Kuldeep Yadav", score: 30 },
  ];

  // Filter players with scores < 70 using arrow function
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h3>List of Players having Scores less than 70</h3>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
