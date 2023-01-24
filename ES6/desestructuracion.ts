(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  };

  const { poder, vision } = avengers;
  console.log( poder, vision);

  const printAvenger = (avengers: Avengers) => {
    console.log(avengers.vision);
  }


  const avengersArr: string[] = ['Cap. América', 'Ironman','Hulk'];

  const [ capi, ironman,  ] = avengersArr;
})()