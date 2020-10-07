import { get } from './api';

export async function fetch() {
  const response = await get('/orders');
  const { data: orders } = response;
  return orders.map((o) => {
    const { date, delivered, cost, reference } = o;
    const parsed = {
      date: new Date(date),
      delivered: Boolean(delivered),
      cost: Number.parseFloat(cost),
      reference,
    };

    return parsed;
  });
}
