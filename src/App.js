import { useEffect, useState } from 'react';
import { getPlants, getFoods } from './services/fetch-utils';
import './App.css';
// import your arrays here
import PlantsList from './PlantsList';
import FoodsLst from './FoodsList';



function App() {
  //Data from supabase lives in state

  const [plants, setPlants] = useState([]);
  const [foods, setFoods] = useState([]);


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



  
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <PlantsList plants={plants}/>
      <FoodsLst foods={foods} />
    </div>
  );
}

export default App;
