var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}


let x = 'Tic';
x = x + 'Tac';
x = x + x;

console.log(x)