import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

import Pokemon from '../pages/Pokemon';
import PokemonDetails from '../pages/PokemonDetails';
import NotFound from '../pages/NotFount';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}

export default AppRoutes;