import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EpisodeDetails from './pages/EpisodeDetails';
import Shows from './pages/Shows';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shows />} />
        <Route path="/episode/:id" element={<EpisodeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
