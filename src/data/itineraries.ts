import { v4 as uuid } from 'uuid';

type Data = {
  id: string;
  name: string;
};

export const itineraries: Data[] = [
  {
    id: uuid(),
    name: 'San Diego Trip',
  },
  {
    id: uuid(),
    name: 'Japan Trip 2024',
  },
];
