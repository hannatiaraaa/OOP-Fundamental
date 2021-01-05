// function object
function AboutMe(name, age, gender, nationality, opacity) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.opacity = opacity;

    this.getName = function () {
        console.log(`My name is ${this.name}`);
    }
}

const hannaFunc = new AboutMe('Hanna', 23, 'female', 'INA', 'solid');
console.log(hannaFunc);
hannaFunc.getName();

// class
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;

        this.getName = function () {
            console.log(`My name is ${this.name}`);
        }

        this.setGender();
    
    }

    setGender() {
        if (this.gender === "L") {
            this.gender = "male";
        } else if (this.gender === "P") {
            this.gender = "female";
        }
    }
}

const hannaClass = new Human('Hanna', 23, 'P');
console.log(hannaClass);
hannaClass.getName();