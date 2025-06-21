import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select();
      if (!error) setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div>
      {creators.length === 0 ? <p>No creators found.</p> :
        creators.map(c => <CreatorCard key={c.id} creator={c} />)}
    </div>
  );
}
