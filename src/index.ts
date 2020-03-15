// designating each argument's types with interface
/*
interface Human {
  name: string;
  age: number;
  language: string;
}

// variable
const person = {
  name: "young",
  age: 24,
  language: "python"
};

*/

// pass properties onto index.js and designate each argument's types with class
class Human {
  public name: string;
  public age: number;
  public language: string;
  constructor(name: string, age: number, language: string) {
    this.name = name;
    this.age = age;
    this.language = language;
  }
}

const myam = new Human("myam", 17, "IFRS");

// function
const sayNoop = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age} old and you love ${person.language}`;
};

console.log(sayNoop(myam));

export {};
