console.log("Encapsulation");

class Car {
  constructor(color, merk, bbm, price) {
    const colorValue = color;
    const priceUSD = price;
    this.merk = merk;
    this.bbm = bbm;

    this.details = () => {
      return {
        priceUSD,
        colorValue,
      };
    };
  }
}

const ferrari = new Car("pink", "ferrari", "premium", 25000);
