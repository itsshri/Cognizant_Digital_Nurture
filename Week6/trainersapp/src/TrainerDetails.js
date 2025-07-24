import { useParams, Link } from 'react-router-dom';
import trainers from './TrainersMock';

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === id);

  if (!trainer) return <p>Trainer not found</p>;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>My Academy Trainers App</h1>
      
      {/* Navigation Links */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/trainers">Show Trainers</Link>
      </nav>

      {/* Trainer Details */}
      <h2>Trainers Details</h2>
      <h3>
        <strong>{trainer.name}</strong> ({trainer.technology})
      </h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>

      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerDetail;
