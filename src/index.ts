const sayNoop = (name: string, age: number, language: string): string => {
  return `hello ${name}, you are ${age} old and you love ${language}`;
};

console.log(sayNoop("AHN", 24, "python"));
export {};
