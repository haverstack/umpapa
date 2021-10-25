import { h } from 'preact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About } from './pages';
import {
  AvatarFactory,
  AvatarFactoryRoot,
  AvatarFactoryList,
  AvatarFactoryCreate,
  AvatarFactoryEdit,
} from './pages/AvatarFactory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="avatar-factory" element={<AvatarFactoryRoot />}>
          <Route path="/avatar-factory" element={<AvatarFactoryList />} />
          <Route path="new" element={<AvatarFactoryCreate />} />
          <Route path=":slug" element={<AvatarFactory />} />
          <Route path=":slug/edit" element={<AvatarFactoryEdit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
