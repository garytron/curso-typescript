(() => {
  interface Client {
    name: string;
    age: number;
    address?: Address;
  }

  interface Address{
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Fernando',
    age: 25,
    address: {
      id: 124,
      zip: 'KY2SUD',
      city: 'Ottawa'
    }
  };

  const client2: Client = {
    name: 'Melissa',
    age: 30
  };
})()