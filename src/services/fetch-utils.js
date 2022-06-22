import { client } from './client';

export async function getPlants() {
  const response = await client
    .from('plants')
    .select('*');

  return response.body;
}

export async function getFoods() {
  const response = await client
    .from('foods')
    .select('*');


  return response.body;
}

export async function getMovies() {
  const response = await client
    .from('movies')
    .select('*');


  return response.body;
}

export async function getFarmers() {
  const response = await client 
    .from('farmers')
    .select('*');

  return response.body;
}