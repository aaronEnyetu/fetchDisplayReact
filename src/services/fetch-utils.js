import { client } from './client';

export async function getPlants() {
  const response = await client
    .from('plants')
    .select('*');

  return response.body;
}