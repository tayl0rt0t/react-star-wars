import { useState } from 'react';
import GetShips from './services/sw-api';
import StarshipCard from './StarShipCard';
/**
Research documentation of SWAPI to find the endpoint for the starships resource.

https://swapi.dev/api/starships/

Create a services/sw-api.js service module and ensure that all API/fetch calls are made from this module.


Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

Obtain all of the starships from the API and render in <App>a card for each starship.

Cards should contain the text of the starship's name.
 */
import './App.css';

const url = 'https://swapi.dev/api/starships/';



function App() {
  
  return (
    <div className="">
      <GetShips />
    </div>
  );
}

export default App;
