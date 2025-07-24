import { Link } from 'react-router-dom';

const TrainersList = ({ trainers }) => (
  <div>
    <h2>Trainer List</h2>
    <ul>
      {trainers.map(trainer => (
        <li key={trainer.trainerId}>
          <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TrainersList;
