const invoice = {
    id: 10,
    name: 'Compras de oficinas',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jonas',
        lastName: 'Doe',
        age: 26
    },
    //Datos de factura con arreglo
    items: [
        {
            producto: 'keyboard',
            price: 10499,
            quantity: 2
        },
        {
            producto: 'mouse',
            price: 10499,
            quantity: 3
        },
        {
            producto: 'paper',
            price: 10499,
            quantity: 2
        }
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    },
    gretting: () => {
        return `Hola ${invoice.client.name}`
    }
};

//invoice.client = 'Pepe Roe'
invoice.client.id = '4'
console.log(invoice);

const gretting = invoice.gretting();
console.log(gretting);

console.log(`Total ${invoice.total()}`);


