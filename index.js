let car = { make:"chevrolet", model: "genovation gxe" };
let car2 = { make: "ferrari", model: "portofino" };
let car3= { make: "mclaren", model: "720S" };

let state= {
    pageHeader: "FAST CARS",
    car: [car, car2, car3],
};

function renderCar(){
    carStr = "";
    state.car.forEach(function (car, index) {
        carStr =+ `
        <div>
        ${car.make} is ${car.model}
        </div>`;
    });
    return carStr;
}

function render(){
   
    htmlString = `<div>
                    <h1>${state.pageHeader}</h1>
                    ${renderCar()}
                 </div>`;
renderCar();
    
    appElement = document.getElementById("app");
    appElement.innerHTML = htmlString;

                }
render();