const person = {
    name: "Teste Nome",
    age: 47,

    getName: function(){
        return this.name;
    },

    setName: function(newName){
        this.name = newName;
    },

    showInfo: function(){
        console.log(`${this.name} tem ${this.age} anos de idade.`);
    }
}

const namePerson = person.getName();

console.log(namePerson);
person.showInfo();

person.setName("Teste Nome Alterado");
person.showInfo();
