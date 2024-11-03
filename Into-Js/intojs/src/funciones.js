function sayHello(name = 'pepe', age =0) {
    const gretting = `hola funcion ${name} edad ${age}`;
    
    return gretting;
}

const result = sayHello('Enrique', 2);
console.log(result);


const hello = function (name = 'pepe', age =0) {
    const gretting = `hola funcion ${name} edad ${age}`;
    
    return gretting;
}

const resultt = sayHello('Ximena', 20);
console.log(resultt);

//funcion de flecha
const helloflech = (name = 'pepe', age =0) => {
    return `hola funcion ${name} edad ${age}`;;
}

const result1 = sayHello('Ximena', 22);
console.log(result1);
