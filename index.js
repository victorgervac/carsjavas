let car = { make: "chevrolet", model: "genovation gxe" };
let car2 = { make: "ferrari", model: "portofino" };
let car3= { make: "mclaren", model: "720S" };

let cars = [car, car2, car3];

let state= {
    pageHeader: "FAST CARS",
    cars: cars
};
function renderCar(){
    carStr = ''
    cars.forEach(function(car) {
        carStr += `<div onclick='clicked(this)'> 
        ${car.make} makes: ${car.model}.
        </div>`
    });
return carStr

}
function clicked(carDiv){

}

function render (){
    htmlString = `<div>
                    <h1>${state.pageHeader}</h1>
                    ${renderCar()}
                 </div>`;
    document.getElementById("app").innerHTML = htmlString;
    
    renderCar();
}

render();
 