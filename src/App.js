import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import CharacterCards from './components/Cards/CharacterCards';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CharacterDetails from './components/Cards/CharacterDetails';
import Navbar from './components/Navbar/Navbar';
import SpellDetails from './components/Cards/SpellDetails';
import Houses from './components/Cards/Houses';
import HouseCharacters from './components/Cards/HouseCharacters';
import HouseDetails from './components/Cards/HouseDetails';
import ScrollToTop from './components/Helpers/ScrollToTop';

const API_URL = 'https://hp-api.herokuapp.com/api/characters';
const API_SPELLS_URL = 'https://hp-api.herokuapp.com/api/spells';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/hpwiki' element={<Home />} />
          <Route path='/:id' element={<CharacterDetails />} />
          <Route path='/Gryffindor/:id' element={<HouseDetails />} />
          <Route path='/Hufflepuff/:id' element={<HouseDetails />} />
          <Route path='/Ravenclaw/:id' element={<HouseDetails />} />
          <Route path='/Slytherin/:id' element={<HouseDetails />} />
          <Route path='/spells' element={<Spells />} />
          <Route path='/house' element={<House />} />
          <Route path='/Gryffindor' element={<HouseRoster />} />
          <Route path='/Hufflepuff' element={<HouseRoster />} />
          <Route path='/Ravenclaw' element={<HouseRoster />} />
          <Route path='/Slytherin' element={<HouseRoster />} />
        </Routes>
        <footer className='footer'>&copy; Copyright 2022 Evan Moon</footer>
      </div>
      </BrowserRouter>
    );
}

const Home = () => {

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(API_URL).then(res => res.json());
      setFetchedData(data);
    })()
  }, [])

  return (
    <div className="App">
      <h1 className='text-center text-warning fw-bold mb-4'>Characters</h1>
      <h6 className='text-center text-info fw-bold mb-4'>Click a Character to View More Details!</h6>
      <div className="large-container d-flex justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="row">
            <CharacterCards fetchedData={fetchedData} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Spells = () => {

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(API_SPELLS_URL).then(res => res.json());
      setFetchedData(data);
    })()
  }, [])

  return (
    <div className="App">
      <h1 className='text-center text-warning fw-bold mb-4'>Spells</h1>
      <div className="large-container d-flex justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="row">
            <SpellDetails fetchedData={fetchedData} />
          </div>
        </div>
      </div>
    </div>
  );
}

const House = () => {
  return (
    <div className="App">
      <h1 className='text-center text-warning fw-bold mb-4'>Houses</h1>
      <h6 className='text-center text-info fw-bold mb-4'>Click a House to View its Members!</h6>
      <div className="large-container d-flex justify-content-center">
        <div className="col-lg-12 col-12">
          <div className="row">
            <Houses />
          </div>
        </div>
      </div>
    </div>
  );
}

const HouseRoster = () => {
  return (
    <div className="App">
      <h1 className='text-center text-warning fw-bold mb-4'>Members</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-lg-12 col-12">
          <div className="row">
            <HouseCharacters />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
