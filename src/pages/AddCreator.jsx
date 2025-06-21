import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

export default function AddCreator() {
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([form]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input required placeholder="URL" onChange={e => setForm({ ...form, url: e.target.value })} />
      <input required placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, imageURL: e.target.value })} />
      <button type="submit">Add Creator</button>
    </form>
  );
}
