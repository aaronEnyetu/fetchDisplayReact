import { useEffect, useState } from 'react';
import { getPlants, getFoods, getMovies, getFarmers } from './services/fetch-utils';
import './App.css';
// import your arrays here
import PlantsList from './PlantsList';
import FoodsList from './FoodsList';
import MovieList from './MovieList';
import FarmersList from './FarmersList';



function App() {
  //Data from supabase lives in state

  const [plants, setPlants] = useState([]);
  const [foods, setFoods] = useState([]);
  const [movies, setMovies] = useState([]);
  const [farmers, setFarmers] = useState([]);


  async function fetchPlantsData() {

    const data = await getPlants();
    setPlants(data);
  }

  useEffect(() => {
    fetchPlantsData();
  }, []);

  useEffect(() => {
    async function fetchFoodsData() {
      const data = await getFoods();
      setFoods(data);
    }

    fetchFoodsData();
  }, []);

  useEffect(() => {
    async function fetchMoviesData() {
      const data = await getMovies();
      setMovies(data);
    }

    fetchMoviesData();
  }, []);

  useEffect(() => {
    async function fetchFarmersData() {
      const data = await getFarmers();
      setFarmers(data);
    }
    fetchFarmersData();
  }, []);



  
  return (
    <div className="App">
        Render and show all your lists here. Pass the arrays as props.
      <PlantsList plants={plants}/>
      <FoodsList foods={foods} />
      <MovieList movies={movies} />
      <FarmersList farmers={farmers} />
    </div>
  );
}

export default App;
