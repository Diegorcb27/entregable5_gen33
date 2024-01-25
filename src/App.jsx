// import { useSelector } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokemonPage from "./pages/PokemonPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  // const trainerName = useSelector((states) => states.trainer); //el parametro dentro de una funcion callback de useSelector son todos los estados globales dentro de un objeto, es el valor del estado

  // console.log(trainerName);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:id" element={<PokemonPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
