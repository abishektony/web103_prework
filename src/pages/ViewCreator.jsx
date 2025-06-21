import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
import '../App.css';

export default function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const getCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setCreator(data);
      }
    };
    getCreator();
  }, [id]);

  if (!creator) return <p className="loading">Loading...</p>;

  return (
    <div className="creator-view-card">
      <div className="creator-view-info">
        {creator.imageURL && (
            <img
            src={creator.imageURL}
            alt={creator.name}
            className="creator-view-image"
            />
        )}

        <h1 className="creator-view-name">{creator.name}</h1>
        <p className="creator-view-description">{creator.description}</p>
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="creator-view-link"
        >
          Visit Channel
        </a>
      </div>
    </div>
  );
}
