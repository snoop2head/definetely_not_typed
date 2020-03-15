// designating each argument's types with interface, doesn't pass onto index.js
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
*/

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "qoiweoqeiw", "", "GAZUA!", 123456);

// strictly checking types that it is Block class or not
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
