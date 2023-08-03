import { useEffect, useState } from "react";

/*Create a services/sw-api.js service module and ensure that all API/fetch calls are made from this module.


Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

Obtain all of the starships from the API and render in <App>a card for each starship.

Cards should contain the text of the starship's name.
 */
const url = "https://swapi.dev/api/starships/";

export default function GetShips() {
  const [ship, setShip] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //returns a response object
        const res = await fetch(url);
        const data = await res.json();
        setShip(data); //setting the data into the ship state variable
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log("ships-> ", ship);
  }, []);
  return (
    
    <>
      {ship ? (
        ship.results.map((ship) => <div style={{width:'200px', height:'200px', border:'2px solid red',margin:'3% auto',display:'inline-block',marginLeft:'10px', textAlign:'center'}}><h3 key={ship.created}>{ship.name}</h3></div>)
      ): (
        <h3>loading</h3>
      )
      }
      
    </>
    
  );
}

