import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../client';

export default function EditCreator() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id).single();
      setForm(data);
    };
    fetchCreator();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update(form).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/');
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} />
      <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input value={form.imageURL} onChange={e => setForm({ ...form, imageURL: e.target.value })} />
      <button type="submit">Update Creator</button>
      <button type="button" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </form>
  );
}
