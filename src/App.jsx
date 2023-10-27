import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card';

const url = "https://rickandmortyapi.com/api/character";

function App() {
  
  
  const [characters, setcharacters] = useState();

  useEffect(()=> {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setcharacters(data.results);
    });

  }, [])

  
  console.log("characters", characters)

  return (
    <>
      
      <h1>Bootcamp Javascript - Ruta N</h1>
      <h2>Personajes Rick and Morty</h2>

      
<div className='characters'>
{characters?.map((cha) => (
  <Card key={cha.id} char={cha} />
  
))}
</div>
</>
  );
}

export default App
