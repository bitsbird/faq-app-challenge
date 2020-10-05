import { get } from './api';

export async function fetch() {
  const response = await get('/orders');

  return response.data;
}
