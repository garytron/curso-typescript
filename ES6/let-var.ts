(() => {
  const nombre = 'Fernando';
  function getName() {
    console.log('viejo getName');
  }

  const getName = () => {
    console.log('Nuevo getName');
  }

  getName();
})()