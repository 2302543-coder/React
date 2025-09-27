

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

function Classes() {
  const mycar = new Model("Ford", "Mustang");

  return (
    <div>
      <h2>{mycar.show()}</h2>
    </div>
  );
}

export default Classes;
