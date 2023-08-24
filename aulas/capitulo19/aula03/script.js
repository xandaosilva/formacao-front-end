class Person{
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    getName() {
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    getAge(){
        return this.age;
    }

    setAge(newAge){
        this.age = newAge;
    }

    getProfession(){
        return this.profession;
    }

    setProfession(newProfession){
        this.profession = newProfession;
    }

    showInfo(){
        console.log(`${this.name} tem ${this.age} anos de idade e sua profissão é ${this.profession}`);
    }
}

const p1 = new Person("P1", 18, "Developer fullstack");
const p2 = new Person("P2", 90, "Developer backend");
const p3 = new Person("P3", 14, "Developer frontend");

console.log(p1);
console.log(p2);
console.log(p3);

p1.showInfo();
p2.showInfo();
p3.showInfo();
