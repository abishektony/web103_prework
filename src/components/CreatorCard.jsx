import { Link } from 'react-router-dom';
import '../App.css';

export default function CreatorCard({ creator }) {
  return (
    <div className="creator-card">
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="creator-image"
        />
      )}

      <div className="creator-info">
        <h2 style={{ margin: 0 }}>{creator.name}</h2>
        <p style={{ marginBottom: '8px' }}>{creator.description}</p>
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="channel-link"
        >
          Visit Channel
        </a>
      </div>

      <div className="button-column">
        <Link to={`/creator/${creator.id}`} className="btn btn-view">
          View
        </Link>
        <Link to={`/edit/${creator.id}`} className="btn btn-edit">
          Edit
        </Link>
      </div>
    </div>
  );
}
