// designating each argument's types with interface
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

// function
const sayNoop = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age} old and you love ${person.language}`;
};

console.log(sayNoop(person));

export {};
