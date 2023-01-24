(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = ( name: string) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado!`;

    let myFunction;

    myFunction = 10;
    console.log(myFunction);

    myFunction = addNumbers;
    console.log( myFunction(1,2));

    myFunction = greet;
    console.log(myFunction('Fernando'));

    myFunction = saveTheWorld;
    console.log(saveTheWorld());

    let myFunction2: (y: string) => string;
    myFunction2 = greet;
    console.log(myFunction2('Fernando'));

})()