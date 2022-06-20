import './App.css';
import pokemons from './data';
import PokemonCard from './PokemonCard';

function App() {
  return (
    <>
      <h1>Pokedéx</h1>
      <div className='pokemons'>
        {pokemons.map(({ id, name, type, averageWeight, image }) => (
          <PokemonCard key={id} source={image} name={name} type={type} avgWeight={averageWeight.value} measurementUnit={averageWeight.measurementUnit} />
        ))}
      </div>
    </>
  );
}

export default App;
