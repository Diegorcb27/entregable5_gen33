import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../Hook/useFetch";
import PokeCard from "../Components/PokedexPage/PokeCard";
import SelectType from "../Components/PokedexPage/SelectType";
import "./stylesMain/PokedexPage.css";
import pokedex from "../assets/img pokedex.png"

const PokedexPage = () => {
  const trainerName = useSelector((states) => states.trainer);
  const [inputValue, setInputValue] = useState("");
  const [typeSelected, setTypeSelected] = useState("allPokemons"); //typeSelected es la url del tipo que esra en el archico selecType en value

  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

  const [pokemons, getPokemons, getTypePokemon] = useFetch(url);

  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getTypePokemon(typeSelected);
    }
  }, [typeSelected]);

  // console.log(pokemons)

  console.log(typeSelected);

  const inputName = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputName.current.value.trim().toLowerCase());
  };

  const cbFilter = (pokeInfo) =>
    pokeInfo.name.toLowerCase().includes(inputValue);

  return (
    <div>
      <div className="pokemon_container">
        <header className="rectangle_rojo">
          <div className="rectangle_negro"></div>
          <div className="circle_2"></div>
          <img className="img_pokedex_1" src={pokedex} alt="" />
        </header>
        <aside className="aside_container">
        <h2 className="title_welcome">
          Hi <span className="trainer_name">{trainerName}</span>, here you can find your favorite pokemon
        </h2>
        <form className="form_container" onSubmit={handleSearch}>
          <div className="container_find">
            <input placeholder="search pokemon by name" className="form_input" ref={inputName} type="text" />
            <button className="btn_2">Search</button>
          </div>
          <SelectType  setTypeSelected={setTypeSelected} />
        </form>
        </aside>
        <div className="container_pokecard">
          {pokemons?.results.filter(cbFilter).map((pokeInfo) => (
            <PokeCard key={pokeInfo.url} url={pokeInfo.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
