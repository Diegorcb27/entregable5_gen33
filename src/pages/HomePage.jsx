import React, { useRef } from 'react'
import { setTrainerG } from '../store/states/trainer.state'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./stylesMain/HomePage.css"
import pokedex from "../assets/img pokedex.png"

const HomePage = () => {


const inputTrainer=useRef()

const dispath=useDispatch() //para poder usar una action debo despacharla

const navigate = useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault()
    dispath(setTrainerG(inputTrainer.current.value.trim()))
    navigate("/pokedex")  //preguntar, es para redirigir a la ruta Pokedex
}

  return (
    <article className='container_home'>
      <header>
      <img className="img-pokedex-logo" src={pokedex} alt="image pokedex letters"/>
          <h2 className='title_home'>Hi trainer!</h2>
          <p className='welcome_trainer'>To start this app, give me your trainer name</p>
      </header>
        <form className='form_container' onSubmit={handleSubmit}>
            <input className='input_trainer' ref={inputTrainer} type="text"/>
            <button className='btn_home'>Catch them all</button>
        </form>
        <div className='rectangle_red'>
          <div className='rectangle_black'></div>
          <div className='circle'></div>
        </div>
    </article>
    
  )
}

export default HomePage