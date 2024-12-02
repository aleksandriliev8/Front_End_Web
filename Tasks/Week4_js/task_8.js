// function fuelEfficiency(obj_array)
// {
//     let best_price_mpg = 0;
//     let best_car = null;

//     for (let car of obj_array)
//     {
//         let _price = car["price"];
//         let _mpg = car["mpg"];

//         if ((_mpg / _price) > best_price_mpg)
//         {
//             best_price_mpg = _mpg / _price;
//             best_car = car;
//         }
//     }

//     return best_car["brand"] + " " + best_car["model"];
// }

function findMostFuelEfficientCar(cars) {
    let bestValue = -Infinity;
    let mostFuelEfficientCar = '';

    for (let car of cars) {
        let mpgPerDollar = car.mpg / car.price;
        if (mpgPerDollar > bestValue) {
            bestValue = mpgPerDollar;
            mostFuelEfficientCar = `${car.brand} ${car.model}`;
        }
    }

    return mostFuelEfficientCar;
}


const array = [
    { brand: "Toyota", model: "Camry", price: 24000, mpg: 32 },
    { brand: "Audi", model: "A8", price: 75000, mpg: 24 },
    { brand: "Honda", model: "Civic", price: 22000, mpg: 36 }
]

// console.log(fuelEfficiency(array));
console.log(findMostFuelEfficientCar(array));