import React, { useEffect } from "react";
import useFetch from "../Hook/useFetch";
import { useParams } from "react-router-dom";
import "./stylesMain/PokemonPage.css"

const PokemonPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, []);

  console.log(pokemon);

  return (
    <div>
      <div className="pokeInfo_container">
        <header className="rectangle_rojo">
          <div className="rectangle_negro"></div>
          <div className="circle_2"></div>
          <img
            className="img_pokedex_1"
            src="/src/assets/img pokedex.png"
            alt=""
          />
        </header>
        <article className="info_card">
          <header className={` info_card_header ${pokemon?.types[0].type.name}`}>
            <img className="img_pokemon"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt={pokemon?.name}
            />
          </header>
          <div className="info_card_body"> 
            <section className="info_card_section_1">
              <div className="info_card_id">{pokemon?.id}</div>
              <hr className="info_card_hr" />
              <h1 className="info_card_name">{pokemon?.name}</h1>
              <ul className="info_card_list_1">
                <li className="height_weight"><span className="span_height_weight">Weight</span>{pokemon?.weight}</li>
                <li className="height_weight"><span className="span_height_weight">Height</span>{pokemon?.height}</li>
              </ul>

              <ul className="info_card_list_2">
                <li className="type_habilities">
                  <span className="span_type_habilities">Type</span>
                    <div className="type_habilities_flex">
                       {
                        pokemon?.types.map(infoType =>(
                          <div className={`pokeInfo_type ${infoType.type.name}`} key={infoType.type.url}>{infoType.type.name}</div>
                        ))
                       }
                    </div>
                </li>
                <li className="type_habilities">
                  <span className="span_type_habilities">Skills</span>
                    <div className="type_habilities_flex">
                    {
                        pokemon?.abilities.map(pokeSkill =>(
                          <div className="info_skill" key={pokeSkill.ability.url}>{pokeSkill.ability.name}</div>
                        ))
                       }
                    </div>
                </li>
              </ul>
            </section>

            <section className="info_card_section_2">
                <hr className="separator_stat"></hr>
                <h2 className="title_section_stat">Stats</h2>
                <div className="stat_container_info">
                    {
                      pokemon?.stats.map(pokeStat => (
                        <article key={pokeStat.stat.url} className="stat_container_info">
                          <header className="stat_header">
                            <h3 className="stat_name">{pokeStat.stat.name}</h3>
                            <p className="stat_porcent">{pokeStat.base_stat}/150</p>
                          </header>
                          <div className="progress_bar_container">
                            <div className="progress_stat"><span className="progress_stat_2" style={{ width: `${(pokeStat.base_stat * 100) / 150}%` }}></span></div>
                          </div>
                        </article>
                      ))
                    }
                </div>
            </section>
          </div>
        </article>
        <article className="movement_card">
          <hr className="movement_hr"/>
          <h2 className="movement_title">Movements</h2>
          <div className="movement_tag_container">
            {pokemon?.moves.map(move =>(
              <p className="movement_tag">{move.move.name}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PokemonPage;
