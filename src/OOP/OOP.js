class Hero {
  constructor(name, type, attack, hp, armor, mp) {
    const money = 2000000; // private
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.hp = hp;
    this.armor = armor;
    this.mp = mp;
    this.serang = function () {
      this.mp--;
      if (type === "range") {
        this.attack = this.attack - this.armor / 8;
      } else if (type === "melee") {
        this.attack = this.attack - this.armor / 10;
      }
      console.log(`MP remaining ${this.name}: ${this.mp}`);
      return this.attack;
    };
    this.healing = function (healingAmount) {
      this.hp += healingAmount;
      console.log(`HP remaining ${this.name}: ${this.hp}`);
    };
    this.terserang = function (enemyAttack) {
      this.hp -= enemyAttack;
      console.log(`HP remaining ${this.name}: ${this.hp}`);
    };

    this.checkHP();
  }

  checkHP() {
    if (this.hp <= 0) {
      alert(`${this.name} telah ditumbangkan`);
    }
  }
}

const Hiro = new Hero("Hiro", "range", 67, 120, 50, 10);
const Dummy = new Hero("Dummy", "melee", 50, 60, 60, 5);
