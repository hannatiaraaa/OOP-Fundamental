console.log("Inheritance, Polymorphism, Abstraction");

class Vehicle {
  constructor(type, wheels) {
    const vehicleType = type;
    this.wheels = wheels;
    this.details = () => {
      return { type: vehicleType };
    };

    this.greetings();
  }

  greetings() {
    return "Hello From Parent";
  }
}

const ferrari = new Vehicle("car", 4);
const honda = new Vehicle("motorcycle", 2);

class Ferrari extends Vehicle {
  constructor(type, wheels, name, price) {
    super(type, wheels);
    this.name = name;
    const priceUSD = price;

    this.speed = () => {
      return "2000mph";
    };
    this.priceFerrari = () => {
      return { "price (USD)": priceUSD };
    };
  }
}

const ferrariMahal = new Ferrari("car", 4, "ferrari mahal", 25000);
const ferrariLebihMurah = new Ferrari("car", 4, "ferrari lebih murah", 250);

// Abstraction
class Sum {
  constructor(val1, val2, val3) {
    this.val1 = val1;
    this.val2 = val2;
    this.val3 = val3;

    const summary = () => {
      return this.val1 + this.val2 + this.val3;
    };

    this.showResults = () => summary();
  }
}

const sumResults = new Sum(23, 24, 60);
