class Car {
  constructor(name) {
    this.brand = name;
  }
}

function CarExample() {
  const mycar = new Car("Ford");
  return <h2>My car brand is: {mycar.brand}</h2>;
}

export default CarExample;