import { useEffect, useState } from 'react';
import { getPlants } from './services/fetch-utils';
import './App.css';
// import your arrays here
import PlantsList from './PlantsList';



function App() {
  //Data from supabase lives in state

  const [plants, setPlants] = useState([]);


  async function fetchPlantsData() {

    const data = await getPlants();
    setPlants(data);
  }

  useEffect(() => {
    fetchPlantsData();
  }, []);



  
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <PlantsList plants={plants}/>
    </div>
  );
}

export default App;
