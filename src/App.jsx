import { Routes, Route, NavLink } from 'react-router-dom';

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">💫 Creatorverse</h1>

        <nav className="app-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/new" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Add Creator
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/creator/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/new" element={<AddCreator />} />
        </Routes>
      </main>
    </div>
  );
}
