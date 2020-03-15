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

// importing class from module crypto js
import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // make the method available at any situation by using static
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  // make a method that returns true all false for checking 5 type validations
  // make it available at any situation by using static
  static validateBlockStructure = (anyBlock: Block): boolean =>
    typeof anyBlock.index === "number" &&
    typeof anyBlock.hash == "string" &&
    typeof anyBlock.previousHash == "string" &&
    typeof anyBlock.timestamp == "number" &&
    typeof anyBlock.data == "string";

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

// using calculateBlockHash method from Block class
// Block.calculateBlockHash;

// create initial Block array
const genesisBlock: Block = new Block(0, "qoiweoqeiw", "", "myam-myam", 123456);

// strictly checking whether Block array's types fits to Block class or not
// designating block class to block array
let blockchain: Block[] = [genesisBlock];

// function that returns all block items in an array
const getBlockChian = (): Block[] => blockchain;

// function that returns one latest block item
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// function that returns new block
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (anyBlock: Block): string =>
  Block.calculateBlockHash(
    anyBlock.index,
    anyBlock.previousHash,
    anyBlock.timestamp,
    anyBlock.data
  );

// taking two arguments of candidateBlock and previousBlock, returns boolean
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  // first validate structure, check index / previoushash / hash
  if (!Block.validateBlockStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

// running blockchain: see how it inherits previousHash
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};
