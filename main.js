let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = Object

let min = Object

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i].price
        totalSale = total / 100 * discount
        average = total / 5
        }

    
    console.log("N3 jami summa", total);
    console.log("N4 jami summadan sikidkani ayirdim", total - totalSale);
    console.log("N6 jami summa o'rtachasi", average);

    let m = []
    let max
    
    for (let k = 0; k < arr.length; k++) {
        m.push(arr[k].price)
    }
    
    let a = Math.min(...m)
    let b = Math.max(...m)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price === a) {
            min = arr[i]
        }

        if (arr[i].price === b) {
            max = arr[i]
        }
    }
    console.log(a);
    console.log(b);
    console.log("N2", min);
    console.log("N1", max);

    for (let i = 0; i < arr.length; i++) {
        
        let price = arr[i].price / 100 * discount

        let obj = {
            name: arr[i].name,
            price: arr[i].price - price
        }
        console.log(arr) 
        arr_sale.push(obj)

        
    }
    console.log(arr_sale);

}
    

setup() 